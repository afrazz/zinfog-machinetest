import { Table } from "components/ui";
import { commentIcon, downloadIcon } from "constants/assets";
import { useAppDispatch, useAppSelector } from "hooks/useStore";
import React, { useEffect } from "react";
import { getOrders } from "store/slices/ordersSlice";

const Orders = () => {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state) => state.orders);

  interface ColumnType {
    title: string;
    dataIndex: string;
    key: string;
    render?: () => any;
    search?: boolean;
    filter?: boolean;
    filterComponent?: "input" | "date" | "select";
    selectOptions?: ("Ready" | "Lab dropped" | "Partial Report")[];
  }

  interface DataType {
    key: React.Key;
    [key: string]: any;
  }

  // date,test,name,bill no,

  const columns: ColumnType[] = [
    {
      title: "Order No",
      dataIndex: "order_id",
      key: "order_id",
      filter: true,
      filterComponent: "input",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      filter: true,
      filterComponent: "date",
    },
    {
      title: "Patient Name",
      dataIndex: "patient_name",
      key: "patient_name",
      search: true,
    },
    { title: "Hospital ID", dataIndex: "hospital_id", key: "hospital_id" },
    {
      title: "Test Name",
      dataIndex: "test_name",
      key: "test_name",
      search: true,
    },
    { title: "Doctor Name", dataIndex: "doctor", key: "doctor", search: true },
    { title: "ETA", dataIndex: "eta", key: "eta" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filter: true,
      filterComponent: "select",
      selectOptions: ["Ready", "Lab dropped", "Partial Report"],
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <div className="flex gap-4">
          <img
            src={downloadIcon}
            alt="download-icon"
            className="cursor-pointer"
          />
          <img
            src={commentIcon}
            alt="comment-icon"
            className="cursor-pointer"
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return <Table columns={columns} data={orders} />;
};

export default Orders;
