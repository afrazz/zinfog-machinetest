import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";

interface ColumnType {
  title: string;
  dataIndex: string;
  key: string;
  render?: () => any;
  search?: boolean;
  filter?: boolean;
  filterComponent?: "select" | "input" | "date";
  selectOptions?: string[];
}

interface ITableProps {
  data: any[];
  columns: ColumnType[];
}

const Table: React.FC<ITableProps> = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 5; // Number of items to display per page

  useEffect(() => {
    if (data.length > 0) {
      setFilteredData(data);
    }
  }, [data]);

  const onPageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const paginatedData = filteredData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const onFilterSubmit = (filters: any) => {
    const newFilteredData = data.filter((order: any) => {
      return Object.keys(filters).every((key) => {
        if (!filters[key]) return true;
        return order[key]
          ?.toString()
          .toLowerCase()
          .includes(filters[key].toLowerCase());
      });
    });
    setFilteredData(newFilteredData);
    setCurrentPage(0); // Reset to first page when applying filters
  };

  const searchFilterKeys = columns
    .filter((cur) => cur.search)
    .map((cur) => cur.dataIndex);

  const filteringKeys = columns
    .filter((cur) => cur.filter)
    .map((cur) => ({
      key: cur.dataIndex,
      filterComponent: cur.filterComponent,
      selectOptions: cur.selectOptions,
    }));

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedData = data.filter((order: any) =>
      searchFilterKeys.some((key: any) =>
        order[key]?.toString().toLowerCase().includes(e.target.value)
      )
    );
    setFilteredData(searchedData);
    setCurrentPage(0); // Reset to first page when performing search
  };

  const onClearFilter = () => {
    setFilteredData(data);
    setCurrentPage(0); // Reset to first page when clearing filters
  };

  return (
    <div>
      <TableHeader
        onSearchInputChange={onSearchInputChange}
        filteringKeys={filteringKeys}
        onFilterSubmit={onFilterSubmit}
        onClearFilter={onClearFilter}
      />
      <TableContent data={paginatedData} columns={columns} />
      <div className="w-full flex justify-end px-10 py-4">
        <ReactPaginate
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          activeClassName={"active"}
          previousLabel={""}
          nextLabel={""}
          pageCount={pageCount}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default Table;
