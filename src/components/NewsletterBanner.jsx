import "../styles/stylesheets/newsletterbanner.scss";

const NewsletterBanner = () => {
  return (
    <section className="section newsletter-banner-section">
      <p className="info-above-title nl-above-title">Newsletter</p>
      <h2 className="title nl-title">Nichts verpassen!</h2>
      <p className="info-text nl-info-text">
        At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <button className="button">Newsletter abonieren</button>
    </section>
  );
};

export default NewsletterBanner;
