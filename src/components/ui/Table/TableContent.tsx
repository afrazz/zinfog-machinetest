import React from "react";
import Tag from "../Tag";

interface ITableContents {
  data: any;
  columns: any;
}

const TableContent: React.FC<ITableContents> = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <div className="mb-4"></div>
      <table className="min-w-full bg-white border-collapse">
        <thead className="shadow-xl">
          <tr>
            {columns.map((column: any) => (
              <th key={column.key} className="px-4 py-2 text-left">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item.key}>
              {columns.map((column: any) => (
                <td key={column.key} className="border-b-[1px] px-4 py-3">
                  {column.dataIndex === "action" ? (
                    column.render()
                  ) : column.dataIndex === "status" ? (
                    <Tag status={item[column.dataIndex]} />
                  ) : (
                    item[column.dataIndex]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
