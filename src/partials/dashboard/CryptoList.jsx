import { useGetCryptosQuery } from "../../services/cryptoApi";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

function CryptoList() {
  const count = 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setsortConfig] = useState({ name: "", order: "" });
  const [className, setClassName] = useState("");
  const history = useNavigate();

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setCryptos(filteredData);
    setsortConfig({ name: "", order: "" });
  }, [cryptosList, searchTerm]);

  // handler for sorting table
  const sortTable = (name) => {
    console.log("sortTable");
    let order = "";
    if (sortConfig.order === "asc") order = "desc";
    else order = "asc";

    const table = cryptos;
    table.sort((a, b) => {
      if (order === "asc") return a[name] - b[name];
      else return b[name] - a[name];
    });
    setCryptos(table);
    setsortConfig({ name: name, order: order });
  };

  const getClassname = (column) => {
    if (!sortConfig.name) return "";
    if (sortConfig.name == column) {
      return sortConfig.order;
    }
  };

  const classname = useCallback(
    (column) => {
      return getClassname(column);
    },
    [sortConfig]
  );
  if (isFetching) {
    return <Loading />;
  }

  const navidateToHistory = (name, uuid) => {
    history(`/history/${name.toLowerCase()}/${uuid}`);
  };

  return (
    <div>
      <div className="crypto-header">
        
          <h2 className="table-header">Cryptocurrency Prices by Market Cap</h2>

        
        <div className="search-crypto">
          <input
            placeholder="Search Cryptocurrency by name"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            className="search-crypto-input"
          />
        </div>
        
      </div>
      <div>
        <div>
          <table className="table-crypto">
            <thead className="table-th">
              <tr>
                <th>
                  <div>Name</div>
                </th>
                <th
                  className={` ${classname("price")}`}
                  onClick={() => {
                    sortTable("price");
                  }}
                >
                  <div className="table-header-text">Price</div>
                </th>
                <th
                  className={`${classname("marketCap")}`}
                  onClick={() => {
                    sortTable("marketCap");
                  }}
                >
                  <div className="table-header-text">Markets</div>
                </th>
                <th
                  className={`${classname("change")}`}
                  onClick={() => {
                    sortTable("change");
                  }}
                >
                  <div className="table-header-text">Change</div>
                </th>
              </tr>
            </thead>

            <tbody>
              {cryptos?.map((item) => {
                return (
                  <tr
                    onClick={() => navidateToHistory(item.name, item.uuid)}
                    key={item.uuid}
                  >
                    <td>
                      <div className="image-header">
                        <img
                          src={item.iconUrl}
                          width="30"
                          height="30"
                          loading="lazy"
                        />{" "}
                        {item.name}{" "}
                      </div>
                    </td>

                    <td>
                      <div>{item.price} </div>
                    </td>

                    <td>
                      <div>{item.marketCap}</div>
                    </td>
                    <td>
                      <div>
                        {item.change.indexOf("-") > -1 ? (
                          <span style={{ color: "#FF0000" }}>
                            {item.change}%
                          </span>
                        ) : (
                          <span style={{ color: "#00FF00" }}>
                            {item.change}%
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CryptoList;
