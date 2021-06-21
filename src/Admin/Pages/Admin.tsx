import React, { useState, useEffect } from "react";
import * as Api from "../Components/Api";
import AdminLayout from "../Layout/AdminLayout";
import { kommuner } from "../../Data/communeData";

export default function Admin() {
  console.log(kommuner);
  const [data, setData] = useState([]);
  const [commune, setCommune] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const memoizedGetData = () => {
    const fetchData = async () => {
      try {
        const offers = await Api.GetData("kommuner.json");
        setData(offers);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    memoizedGetData();
  }, []);

  //data && console.log(data[120]);
  /*data.map(function (communes, index) {
      console.log(communes[index].name);
    });*/

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
        {kommuner.map((data, index) => {
          return (
            <button
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "transparent",
                borderRadius: "6px",
                border: "2px solid gray",
                cursor: "pointer",
              }}
              onClick={() =>
                alert(
                  `Hämta datan från kommunen ${data.name} med id ${data.id}`
                )
              }
            >
              <li key={index} style={{ listStyle: "none" }}>
                <span className="nav-title" style={{ color: "#43a7f5" }}>
                  {data.name}
                </span>
              </li>
            </button>
          );
        })}
      </div>
    </AdminLayout>
  );
}
