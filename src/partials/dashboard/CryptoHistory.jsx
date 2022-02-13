import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoHistoryQuery } from "../../services/cryptoApi";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import Loading from "../Loading";
import Sidebar from "../Sidebar";
import WelcomeBanner from "../dashboard/Banner";
import Newslist from "../dashboard/News";
import Header from "../Header";

Chart.register(...registerables);

const CryptoHistory = () => {
  const { name, coinid } = useParams();
  console.log("coinid");
  console.log(coinid);

  const {
    data: coinHistory,
    err,
    isFetchingCryptohistory,
  } = useGetCryptoHistoryQuery(coinid);

  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleString()
    );
  }

  const graphData = {
    labels: coinTimestamp,
    datasets: [
      {
        label: name.toUpperCase(),
        data: coinPrice,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#348AC7",
      },
    ],
  };

  if (isFetchingCryptohistory) return <Loading />;

  return (
    <>
      <Sidebar />
      <section class="home-section">
        <Header />
        <WelcomeBanner />
        <Newslist />
        <h1
          style={{
            textAlign: "center",
            margin: "20px 0",
            background: "white",
            padding: "10px",
            color:"grey"
          }}
        >
          {name.toUpperCase()} &nbsp; HISTORY
        </h1>
        <Line data={graphData}></Line>
      </section>
    </>
  );
};

export default CryptoHistory;
