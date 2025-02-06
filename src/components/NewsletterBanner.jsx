import "../styles/stylesheets/newsletterbanner.scss";

const NewsletterBanner = () => {
  return (
    <section className="section newsletter-banner-section">
      <p className="above-title">Newsletter</p>
      <h2 className="title">Nichts verpassen!</h2>
      <p className="info-text">
        At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <button>Newsletter abonieren</button>
    </section>
  );
};

export default NewsletterBanner;
