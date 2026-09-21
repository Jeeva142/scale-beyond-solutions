import "./ComboPack.css";

const ComboPack = () => {

  const plans = [
    {
      name: "Basic Plan",
      price: "₹75,000",
      oldPrice: "₹1 L",
    },
    {
      name: "V.I.P Plan",
      price: "₹1 L",
      oldPrice: "₹1.75 L",
    },
    {
      name: "Premium Plan",
      price: "₹1.75 L",
      oldPrice: "₹2 L",
    },
  ];

  const features = [
    {
      name: "Website",
      values: [
        "Upto 3 Pages - 1 Year",
        "Upto 6 Pages - 1 Year",
        "Upto 15 Pages - 1 Year",
      ],
    },
    {
      name: "SEO - Search Engine Optimization",
      values: [
        "3 Keywords - 1 Year",
        "6 Keywords - 1 Year",
        "15 Keywords - 1 Year",
      ],
    },
    {
      name: "Mapping Keywords",
      values: [
        "3 Keywords - FREE",
        "5 Keywords - FREE",
        "10 Keywords - FREE",
      ],
      highlight: true,
    },
    {
      name: "SEM - Google Adwords",
      values: [
        "15 Days",
        "30 Days",
        "75 Days",
      ],
    },
    {
      name: "SMM - Social Media Marketing",
      values: [
        "30 Leads - 15 Days",
        "60-75 Leads - 30 Days",
        "150 Leads - 75 Days",
      ],
    },
    {
      name: "SMO - Social Media Optimization",
      values: [
        "3 Posts - 15 Days",
        "6 Posts - 30 Days",
        "12 Posts - 75 Days",
      ],
    },
  ];

  return (
    <div className="combo-page">

      {/* Hero */}
      <section className="combo-hero">
        <div className="combo-hero-content">

          <span className="combo-label">
            COMBO PACK
          </span>

          <h1>
            Combo <span>Pack</span>
          </h1>

          <p>
            Complete digital solutions for building,
            promoting and growing your business.
          </p>

        </div>
      </section>

      {/* Pricing */}
      <section className="combo-pricing-section">

        <div className="combo-pricing-container">

          <div className="combo-table-wrapper">

            <table className="combo-table">

              <thead>

                <tr>

                  <th className="combo-feature-heading">
                    Choose <span>your plan</span>
                  </th>

                  {plans.map((plan, index) => (
                    <th key={index}>

                      <div className="combo-plan-name">
                        {plan.name}
                      </div>

                      <div className="combo-plan-price">
                        {plan.price}
                      </div>

                      <div className="combo-plan-tax">
                        + Tax
                      </div>

                    </th>
                  ))}

                </tr>

              </thead>

              <tbody>

                {features.map((feature, index) => (

                  <tr
                    key={index}
                    className={
                      feature.highlight
                        ? "combo-highlight-row"
                        : ""
                    }
                  >

                    <td className="combo-feature-name">
                      {feature.name}
                    </td>

                    {feature.values.map((value, valueIndex) => (

                      <td key={valueIndex}>
                        {value}
                      </td>

                    ))}

                  </tr>

                ))}

                {/* Final Price */}
                <tr className="combo-final-price-row">

                  <td></td>

                  {plans.map((plan, index) => (

                    <td key={index}>

                      <strong>
                        {plan.price}
                      </strong>

                      <del>
                        {plan.oldPrice}
                      </del>

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

export default ComboPack;