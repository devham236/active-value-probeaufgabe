import "../styles/stylesheets/newsletterbanner.scss";

const NewsletterBanner = () => {
  return (
    <section className="section newsletter-banner-section">
      <header>
        <p className="info-above-title nl-above-title">Newsletter</p>
        <h2 className="title nl-title">Nichts verpassen!</h2>
      </header>

      <article>
        <p className="info-text nl-info-text">
          At vero eos et accusam et justo duo dolores et ea rebum.
        </p>

        <div className="nl-button-container">
          <button className="button">Newsletter abonnieren</button>
        </div>
      </article>
    </section>
  );
};

export default NewsletterBanner;
