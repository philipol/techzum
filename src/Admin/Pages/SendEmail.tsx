import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import * as Messages from "../Components/Messages";
import { CheckAuth } from "../Components/Auth";

export default function SendEmail() {
  const history = useHistory();

  useEffect(() => {
    const authState = CheckAuth();
    if (authState === false) {
      history.push({ pathname: "/login" });
    }
  }, []);
  const [message, setMessage] = useState<string>();
  const [kommun, setKommun] = useState<any>("eran");

  const getEmail = () => {
    setMessage(() => Messages.email(kommun));
  };
  const getLinkedInMessage = () => {
    setMessage(
      "Nu får du för fan chilla lite hinner ju inte göra allt på en gång! Skicka lite mejl under tiden så löser jag den här funktionen strax"
    );
  };
  return (
    <AdminLayout>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          paddingTop: "150px",
          padding: "50px",
          width: "100%",
          height: "95vh",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            placeItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              gridColumn: "1/3",
              display: "grid",
              gridTemplateColumns: "1fr 2fr 1fr",
              placeItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                gridColumn: "2",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                placeItems: "center",
              }}
            >
              <h1 style={{ margin: "2vh" }}>Hämta mejl</h1>
              <Link to="/admin" style={{ margin: "2vh" }}>
                Tillbaka
              </Link>
              <Button
                onClick={() => getEmail()}
                style={{ width: "100%", marginBottom: "5px" }}
              >
                Hämta email!
              </Button>
              <Button
                onClick={() => getLinkedInMessage()}
                style={{ width: "100%", marginBottom: "5px" }}
              >
                Hämta LinkedIn meddelande!
              </Button>
              <input
                type="text"
                onChange={(event) => setKommun(event.target.value)}
                placeholder="Ange kommun"
                style={{
                  width: "100%",
                  border: "1px solid gray",
                  borderRadius: "2px",
                  padding: "1%",
                  gridColumn: "1/3",
                  marginBottom: "5px",
                }}
              />
              <textarea
                name=""
                id=""
                value={message}
                style={{
                  gridColumn: "1/3",
                  height: "50vh",
                  width: "100%",
                  padding: "3%",
                  borderRadius: "2px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
