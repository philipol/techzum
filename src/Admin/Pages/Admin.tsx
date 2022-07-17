import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Space } from "antd";
import AdminLayout from "../Layout/AdminLayout";
import { kommuner } from "../../Data/communeData";
import { CheckAuth } from "../Components/Auth";

export default function Admin() {
  const history = useHistory();

  useEffect(() => {
    const authState = CheckAuth();
    if (authState === false) {
      history.push({ pathname: "/login" });
    }
  }, []);
  const [commune, setCommune] = useState<any>();
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      title: "Kommun",
      dataIndex: "name",
      key: "1",
    },
    {
      title: "Kommun ID",
      dataIndex: "id",
      key: "2",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "3",
      filters: [
        {
          text: "Tomt",
          value: "Tomt",
        },
        {
          text: "Tillagd data",
          value: "Tillagd data",
        },
      ],
      onFilter: (value: any, data: any) => data.status.indexOf(value) === 0,
    },
    {
      title: "Säljare",
      dataIndex: "salesman",
      key: "4",
      filters: [
        {
          text: "Philip",
          value: "Philip",
        },
        {
          text: "Jesper",
          value: "Jesper",
        },
        {
          text: "Albin",
          value: "Albin",
        },
        {
          text: "Ingen tillagd",
          value: "Ingen tillagd",
        },
      ],
      onFilter: (value: any, data: any) => data.salesman.indexOf(value) === 0,
    },
    {
      title: "Action",
      key: "action",
      render: (data: any) => (
        <Space size="middle">
          <Link to={`/admin/kommun/${data.id}`}>Öppna {data.name}</Link>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    setCommune(kommuner);
    setLoading(false);
  });
  return loading ? (
    <h2>loading...</h2>
  ) : (
    <AdminLayout>
      Admin startsida
      <div
        style={{
          display: "grid",
          placeItems: "center",
          gap: "1rem",
          marginTop: "100px",
          padding: "50px",
          width: "100%",
        }}
      >
        <h1>Kommuner</h1>
        <Table bordered dataSource={commune} columns={columns}></Table>
      </div>
    </AdminLayout>
  );
}
