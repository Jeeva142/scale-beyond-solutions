import "./DynamicWebsite.css";

const DynamicWebsite = () => {
  const plans = [
    {
      name: "Bronze",
      price: "₹8,000",
      oldPrice: "₹10,500",
      finalPrice: "₹9,440",
    },
    {
      name: "Silver",
      price: "₹15,000",
      oldPrice: "₹19,500",
      finalPrice: "₹17,700",
    },
    {
      name: "Gold",
      price: "₹25,000",
      oldPrice: "₹31,500",
      finalPrice: "₹29,500",
    },
    {
      name: "Platinum",
      price: "Contact us",
      oldPrice: "",
      finalPrice: "Call Us",
    },
  ];

  const features = [
    {
      name: "1 .COM Domain Name",
      values: [true, true, true, true],
    },
    {
      name: "Free hosting for 1 year",
      values: [true, true, true, true],
    },
    {
      name: "Storage Fee",
      values: ["500 mb", "2 GB", "5 GB", "Unlimited"],
    },
    {
      name: "Pages",
      values: ["5-6", "10-15", "20-30", "Unlimited"],
    },
    {
      name: "Online Enquiry Form",
      values: [true, true, true, true],
    },
    {
      name: "404 Error Page",
      values: [true, true, true, true],
    },
    {
      name: "Additional Page",
      values: [
        "Rs.700 Per Page",
        "Rs.1000 Per Page",
        "Rs.1200 Per Page",
        true,
      ],
    },
    {
      name: "Email accounts",
      values: ["2", "5", "8", "Unlimited"],
    },
    {
      name: "CMS - Content Management",
      values: [false, true, true, true],
    },
    {
      name: "Live Chat",
      values: [false, false, true, true],
    },
    {
      name: "Blog",
      values: [false, true, true, true],
    },
    {
      name: "SEO Optimized",
      values: [false, false, false, true],
    },
    {
      name: "User Friendly",
      values: [false, true, true, true],
    },
    {
      name: "Google Map",
      values: [false, true, true, true],
    },
    {
      name: "Responsive Layouts",
      values: [false, true, true, true],
    },
    {
      name: "Social Links",
      values: [false, true, true, true],
    },
    {
      name: "Payment Gateway",
      values: [false, false, false, true],
    },
    {
      name: "Ecommerce",
      values: [false, false, false, true],
    },
    {
      name: "24/7 Support",
      values: [
        "Email",
        "Email & Phone",
        "Email & Phone",
        "Email & Phone",
      ],
    },
  ];

  const renderValue = (value) => {
    if (value === true) {
      return <span className="feature-check">✓</span>;
    }

    if (value === false) {
      return <span className="feature-cross">×</span>;
    }

    return <span className="feature-text">{value}</span>;
  };

  return (
    <div className="dynamic-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="dynamic-hero">

        <div className="dynamic-hero-content">

          <span className="dynamic-label">
            WEBSITE PRICING
          </span>

          <h1>
            Dynamic <span>Website</span>
          </h1>

          <p>
            Choose the website package that fits your
            business requirements.
          </p>

        </div>

      </section>


      {/* =========================================
          PRICING TABLE
      ========================================= */}

      <section className="dynamic-pricing-section">

        <div className="dynamic-pricing-container">

          <div className="dynamic-table-wrapper">

            <table className="dynamic-table">

              <thead>

                <tr>

                  <th className="feature-heading">
                    Choose <span>your plan</span>
                  </th>

                  {plans.map((plan, index) => (
                    <th key={index}>

                      <div className="plan-name">
                        {plan.name}
                      </div>

                      <div className="plan-price">
                        {plan.price}
                      </div>

                      {plan.name !== "Platinum" && (
                        <div className="plan-tax">
                          + Tax
                        </div>
                      )}

                    </th>
                  ))}

                </tr>

              </thead>


              <tbody>

                {features.map((feature, index) => (

                  <tr key={index}>

                    <td className="feature-name">
                      {feature.name}
                    </td>

                    {feature.values.map((value, valueIndex) => (

                      <td key={valueIndex}>
                        {renderValue(value)}
                      </td>

                    ))}

                  </tr>

                ))}


                {/* FINAL PRICE */}

                <tr className="final-price-row">

                  <td></td>

                  {plans.map((plan, index) => (

                    <td key={index}>

                      <strong>
                        {plan.finalPrice}
                      </strong>

                      {plan.oldPrice && (
                        <del>
                          {plan.oldPrice}
                        </del>
                      )}

                    </td>

                  ))}

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </div>
  );
};

export default DynamicWebsite;