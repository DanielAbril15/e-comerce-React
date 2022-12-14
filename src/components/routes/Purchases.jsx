import axios from "axios";
import React, { useEffect, useState } from "react";
import PurchaseCard from "../purchases/PurchaseCard";
import getConfig from "../utils/getConfig";
import "../styles/purchases.css";

const Purchases = () => {
  const [purchases, setPurchases] = useState();

  //Traigo la informacion de de los pedidos que hizo el usuario
  useEffect(() => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/purchases";
    axios
      .get(URL, getConfig())
      .then((res) => setPurchases(res.data.data.purchases))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="purchases">
      <ul className="page-position">
        <p className="page-position__purchases">Home</p>
        <li>
          <p>Purchases</p>
        </li>
      </ul>
      {purchases?.map((purchase) => (
        <PurchaseCard key={purchase.id} purchase={purchase} />
      ))}
    </section>
  );
};

export default Purchases;
