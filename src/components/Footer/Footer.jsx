import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Scale Beyond<br />Solutions</h2>

          <p>
            Your trusted digital solutions partner.
            We help businesses scale beyond limits
            with innovative digital solutions.
          </p>
        </div>


        <div className="footer-column">
          <h3>Customer Service</h3>

          <a href="/contact">Contact Us</a>
          <a href="/about">About Us</a>
          <a href="/price">Pricing</a>
        </div>


        <div className="footer-column">
          <h3>Company</h3>

          <a href="/about">About Us</a>
          <a href="/career">Careers</a>
          <a href="/career">Internship</a>
          <a href="/product">Product Development</a>
        </div>


        <div className="footer-column">
          <h3>Stay Updated</h3>

          <p>
            Subscribe to our newsletter for exclusive
            offers and updates.
          </p>

          <div className="footer-subscribe">
            <input
              type="email"
              placeholder="Your Email"
            />

            <button>→</button>
          </div>
        </div>

      </div>


      <div className="footer-bottom">
        © 2026 Scale Beyond Solutions. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;