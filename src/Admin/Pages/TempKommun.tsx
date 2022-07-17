import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "antd/dist/antd.css";
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from "antd";
import * as Api from "../Components/Api";
import { ObjectedOperations } from "../../Data/ObjectedOperations";
import AdminLayout from "../Layout/AdminLayout";
import { CheckAuth } from "../Components/Auth";

export default function TempKommun() {
  const history = useHistory();

  useEffect(() => {
    const authState = CheckAuth();
    if (authState === false) {
      history.push({ pathname: "/login" });
    }
  }, []);

  const [form] = Form.useForm();
  const [data, setData] = useState<any>([]);
  const [editingId, setEditingId] = useState("");
  let emails: any[] = [];
  data.map((data: { email: any }) => {
    let email = data.email;
    if (email !== "saknas") {
      let newSring = email.substring(1);
      emails.push(newSring);
    }
  });
  console.dir(emails, { maxArrayLength: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id }: any = useParams();
  const comuneId = id;
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }: any) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const isEditing = (record: any) => record.id === editingId;

  const edit = (record: any) => {
    form.setFieldsValue({
      name: `Edrward`,
      org: "32",
      operation: "32",
      email: "email@email.se",
      phone: "08222",
      linkedIn: "dedede",
      webbsida: "www.se.se",
      status: "ddd",
      ...record,
    });
    setEditingId(record.id);
  };

  const cancel = () => {
    setEditingId("");
  };

  const save = async (id: any) => {
    const saveData = async () => {
      try {
        setLoading(true);
        const row = await form.validateFields();
        console.log(row, "row");
        const newData = [...data];
        console.log(newData, "newData");
        const index = newData.findIndex((item) => id === item.id);
        console.log(index, "index");

        const sendData = await Api.put(
          `kommuner/${comuneId}/${index}.json`,
          "PUT",
          row
        );

        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, { ...item, ...row });
          setData(newData);
          setEditingId("");
        } else {
          newData.push(row);
          setData(newData);
          setEditingId("");
        }
        setLoading(false);
      } catch (errInfo) {
        console.log("Validate Failed:", errInfo);
      }
    };
    saveData();
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "0",
      editable: true,
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: "Bolagsnamn",
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
          text: "Saknas",
          value: "saknas",
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
          text: "Saknas",
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
      title: "action",
      dataIndex: "action",
      render: (_: any, record: any) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingId !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: any) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const memoizedGetData = () => {
    const fetchData = async () => {
      try {
        const getData = await Api.GetData(`kommuner/${comuneId}.json`);
        setData(getData);
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            placeItems: "center",
            width: "100%",
          }}
        >
          <h1>Bolag</h1>
          <Link to="/admin">Tillbaka</Link>
        </div>
        <Form form={form} component={false}>
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={data}
            columns={mergedColumns}
            rowClassName="editable-row"
            pagination={{
              onChange: cancel,
            }}
            style={{ width: "95%" }}
          />
        </Form>
      </div>
    </AdminLayout>
  );
}
