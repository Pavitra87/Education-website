import React from "react";
import Title from "../common/heading/Title";
import PricingCard from "../pricing/PricingCard";

const Hprice = () => {
  return (
    <>
      <section className="hprice padding">
        <Title subtitle="OUR PRICING" title="PRICING & PACKAGES" />
        <div className="price container grid">
            <PricingCard/>
        </div>
      </section>
    </>
  );
};

export default Hprice;
