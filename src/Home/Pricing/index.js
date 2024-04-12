import React, { useState } from "react";
import "./index.css"; 
import { TiTick } from "react-icons/ti";

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false); 
  const plans = [
    {
        price1: "$499/ month",
        price2: "$1999/ month",
        category: "Startup",
        features: [
            "Upto 5 successful R&D collaborations",
            "5-10% Success Fee",
            "Ai-driven milestone based tracking of entire project",
            "Access to labs, chemicals, equipments",
            "Upto 10 Research Hiring"
        ],
        ispopular:false,

    },
    {
        price1: "$999/ month",
        price2: "$2999/ month",
        category: "Enterprise",
        features: [
            "All Startup features",
            "Upto 10 successful R&D collaborations",
            "1-5% Success Fee",
            "Upto 20 research hirings",
            "Custom reporting and analytics"
        ],
        ispopular:false,
    },
    {
        price1: "$1999/ month",
        price2: "$6999/ month",
        category: "Corporation",
        features: [
            "All Enterprise features",
            "0-3% Success Fee",
            "Unlimited successful R&D collaborations",
            "Unlimited research hirings",
            "Access to groundbreaking patents"
        ],
        ispopular:true,
    }
   
];

 
  const toggleBilling = () => {
    setIsMonthly(!isMonthly);
  };

  const [isActive, setIsActive] = useState(false); 


  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="main-content">
      <div className="pricing">
        <div className="heading">
          <div>PRICING</div>
          <div>Our Pricing Plans</div>
          <div>
            Choose the pricing plan that best meets your needs and budget, and
            start accelerating your R&D today.
          </div>
        </div>

        <div className="button-switcher">
          <div
            className={isMonthly ? "active-this" : "inactive-this"}
            onClick={toggleBilling}
          >
            Billed Monthly
          </div>
          <div
            className={isActive ? "toggle-button active" : "toggle-button"}
            onClick={()=>{toggle();toggleBilling();}}
          >
            <div className="slider"></div>
          </div>
          <div
            className={isMonthly ?  "inactive-this" :"active-this" }
            onClick={toggleBilling}
          >
            Billed Annually
            &nbsp;
            <span className="saving" >(Save 20%)</span>
          </div>
        </div>
      </div>
      <div className="plans">
        <div className="upper-plan">
        {plans.map((plan, index) => (
                <div className="plan-1" key={index}>
                    <div className="price-plan">{!isMonthly ? plan.price1 : plan.price2}</div>
                    <div className="category">{plan.category}</div>
                    <div className="features">
                        {plan.features.map((feature, index) => (
                            <div className="feature" key={index}>
                                <div className="tick"><TiTick/></div>
                                <div className="feature-desc">{feature}</div>
                            </div>
                        ))}
                    </div>
                    <div className="chooser">Choose Plan</div>
                    {plan.ispopular &&<div className="popular">MOST POPULAR</div>}
                </div>
            ))}
            
        </div>
        <div className="custom-plan">
            <div className="custom-plan-intro">
                <div>Custom Plan</div>
                <div>Contact us today to create a custom plan that meets your specific needs. </div>
            </div>
            <div className="contact-custom">
                CONTACT US 
            </div>
        </div>
      </div>
    </div>
  );
};
