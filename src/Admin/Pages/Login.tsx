import AdminLayout from "../Layout/AdminLayout";
import { Form, Input, Button } from "antd";
import { SetAuth } from "../Components/Auth";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const onFinish = (values: string) => {
    const authState = SetAuth(values);
    if (authState) {
      localStorage.setItem("Auth", "true");
      history.push({ pathname: "/admin" });
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <AdminLayout>
      <div
        style={{
          width: "100%",
          display: "grid",
          placeItems: "center",
          height: "95vh",
        }}
      >
        <Form
          name="login"
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{
            border: "5px solid #43a7f5",
            borderRadius: "4px",
            padding: "5%",
            paddingLeft: "15%",
            width: "50%",
          }}
        >
          <h1>Logga in</h1>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            style={{ width: "100%" }}
          >
            <Input.Password style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#43a7f5",
                transform: "translateX(-50%)",
                width: "100%",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AdminLayout>
  );
}
