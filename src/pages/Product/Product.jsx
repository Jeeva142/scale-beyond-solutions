import "./Product.css";
import Reveal from "../../components/Reveal/Reveal";

const products = [
  {
    id: "01",
    image: `${import.meta.env.BASE_URL}products/ai-marketing.png`,
    title: "AI Marketing Automation Platform",
    description:
      "A comprehensive platform that automates digital marketing activities using artificial intelligence to improve campaign efficiency and customer engagement.",
  },
  {
    id: "02",
    image: `${import.meta.env.BASE_URL}products/ai-crm.png`,
    title: "AI Lead Generation & CRM System",
    description:
      "An intelligent CRM solution that captures, qualifies, and manages leads while automating customer relationship workflows.",
  },
  {
    id: "03",
    image: `${import.meta.env.BASE_URL}products/ai-analytics.png`,
    title: "AI Business Analytics Dashboard",
    description:
      "A centralized business intelligence platform that transforms raw data into actionable insights through interactive dashboards and AI-powered analytics.",
  },
  {
    id: "04",
    image: `${import.meta.env.BASE_URL}products/ai-assistant.png`,
    title: "AI-Powered Business Assistant",
    description:
      "An intelligent virtual business assistant that helps organizations manage daily operations, answer business queries, schedule tasks, generate reports, and provide decision support.",
  },
  {
    id: "05",
    image: `${import.meta.env.BASE_URL}products/ai-hms.png`,
    title: "AI HMS Pro",
    description:
      "A smart AI-powered Hospital Management System designed to simplify patient management, appointments, billing, pharmacy, and healthcare administration.",
  },
  {
    id: "06",
    image: `${import.meta.env.BASE_URL}products/ai-ims.png`,
    title: "AI IMS Pro",
    description:
      "An intelligent Institute Management System that automates academic, administrative, and student management processes through AI-powered technology.",
  },
];

function Products() {
  return (
    <Reveal direction="up">
    <section className="products-section">

      {/* ================================
          HEADER
      ================================= */}

      <div className="products-header">

        <h2>
          Our <span>Products</span>
        </h2>

      </div>


      {/* ================================
          PRODUCTS GRID
      ================================= */}

      <div className="products-grid">

        {products.map((product) => (

          <article
            className="product-card"
            key={product.id}
            data-number={product.id}
          >

            {/* IMAGE */}

            <div className="product-image">

              <img
                src={product.image}
                alt={product.title}
              />

            </div>


            {/* TITLE */}

            <h3>
              {product.title}
            </h3>


            {/* DESCRIPTION */}

            <p>
              {product.description}
            </p>

          </article>

        ))}

      </div>

    </section>
    </Reveal>
  );
}

export default Products;