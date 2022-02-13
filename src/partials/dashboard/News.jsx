import React from "react";
const Newslist = () => {
  const newslist = [
    {
      image:
        "https://s2.coinmarketcap.com/static/new-alerts/613f25cbef9a5a001905f323/img/1643811538062_280x136%20(1).png",
      header: "Crypto News",
      subheader: "Bitcoin, On The Bounce!",
    },
    {
      image:
        "https://s2.coinmarketcap.com/static/new-alerts/611521ecc3074e0013b0c4a9/img/1643868067201_(1)%20Airdrop-280x136.png",
      header: "Token Free Airdrop!",
      subheader: "Join The Dragon Verse NFT Airdrop!",
    },
    {
      image:
        "https://s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1641204376271_MM-280x136.jpeg",
      header: "Podcast",
      subheader: "Podcast: The Bitfinex Hack... Rap?",
    },
    {
      image:
        "https://s2.coinmarketcap.com/static/new-alerts/61152358029ab00019681d99/img/1642729800564_Webp.net-compress-image%20(3).jpg",
      header: "Podcast",
      subheader: "Podcast: The Bitfinex Hack... Rap?",
    },
    {
      image:
        "https://s2.coinmarketcap.com/static/new-alerts/613f25cbef9a5a001905f323/img/1643811538062_280x136%20(1).png",
      header: "Crypto News",
      subheader: "Bitcoin, On The Bounce!",
    },
    {
      image:
        "https://s2.coinmarketcap.com/static/new-alerts/611521ecc3074e0013b0c4a9/img/1643868067201_(1)%20Airdrop-280x136.png",
      header: "Token Free Airdrop!",
      subheader: "Join The Dragon Verse NFT Airdrop!",
    },
  ];

  return (
    <div className="news-container scrollable-section">
      {newslist.map((news) => {
        return (
          <>
            <div className="news-tile">
              <div className="image">
                {" "}
                <img src={news.image} loading="lazy" />
              </div>
              <p className="header">{news.header}</p>
              <p className="sub-header">{news.subheader}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Newslist;
