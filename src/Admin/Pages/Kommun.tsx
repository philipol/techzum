import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "antd/dist/antd.css";
import {
  Table,
  Input,
  Row,
  Button,
  Space,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import * as Api from "../Components/Api";
import AdminLayout from "../Layout/AdminLayout";
import { ObjectedOperations } from "../../Data/ObjectedOperations";
import { CheckAuth } from "../Components/Auth";

export default function Kommun() {
  const history = useHistory();

  useEffect(() => {
    const authState = CheckAuth();
    if (authState === false) {
      history.push({ pathname: "/login" });
    }
  }, []);
  const { id }: any = useParams();
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [test, setTest] = useState("test");
  const testInput = (
    <input
      type="text"
      onChange={(event) => setTest(event.target.value)}
      value={test}
    />
  );
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "0",
      editable: true,
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: "Kommun",
      dataIndex: "name",
      key: "1",
      editable: true,
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: "Org",
      dataIndex: "org",
      key: "2",
      editable: true,
    },
    {
      title: "Verksamhet",
      dataIndex: "operation",
      key: "3",
      editable: true,
      filters: ObjectedOperations,
      onFilter: (value: any, data: any) => data.operation.includes(value),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "4",
      editable: true,
      filters: [
        {
          text: "Inget tillagt",
          value: "Inget tillagt",
        },
        {
          text: "Finns email",
          value: "@",
        },
      ],
      onFilter: (value: any, data: any) => data.email.indexOf(value) === 0,
    },
    {
      title: "Mobil",
      dataIndex: "phone",
      key: "5",
      editable: true,
      filters: [
        {
          text: "Inget tillagt",
          value: "Inget tillagt",
        },
        {
          text: "Finns nummer",
          value: "0",
        },
        {
          text: testInput,
          value: test,
        },
      ],
      onFilter: (value: any, data: any) => data.phone.indexOf(value) === 0,
    },
    {
      title: "LinkedIn",
      dataIndex: "linkedIn",
      key: "6",
      editable: true,
      filters: [
        {
          text: "Inget tillagt",
          value: "Inget tillagt",
        },
        {
          text: "Finns linkedIn",
          value: "@",
        },
      ],
      onFilter: (value: any, data: any) => data.linkedIn.indexOf(value) === 0,
    },
    {
      title: "Webbsida",
      dataIndex: "webbsida",
      key: "7",
      editable: true,
      filters: [
        {
          text: "Inget tillagt",
          value: "saknas",
        },
        {
          text: "Finns webbsida",
          value: "www",
        },
      ],
      onFilter: (value: any, data: any) => data.webbsida.indexOf(value) === 0,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "8",
      editable: true,
      filters: [
        {
          text: "Ej kontaktad",
          value: "Ej kontaktad",
        },
        {
          text: "Tillagd data",
          value: "Tillagd data",
        },
      ],
      onFilter: (value: any, data: any) => data.status.indexOf(value) === 0,
    },
    {
      title: "Action",
      key: "action",
      render: (data: any, obj: any, index: any) => (
        <Space size="middle" key={data.org}>
          <Button onClick={() => alert(`Redigera ${index}`)}>Redigera</Button>
        </Space>
      ),
    },
  ];

  const memoizedGetData = () => {
    const fetchData = async () => {
      try {
        const offers = await Api.GetData(`kommuner/${id}.json`);
        setData(offers);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  };
  useEffect(() => {
    memoizedGetData();
  }, []);
  error && alert(error);
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
        <Link to="/admin">Tillbaka</Link>
        <Table
          bordered
          dataSource={data}
          columns={columns}
          rowKey={data.org}
          style={{ width: "90%" }}
        ></Table>
      </div>
    </AdminLayout>
  );
}
