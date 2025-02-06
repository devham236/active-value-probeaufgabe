import "../styles/stylesheets/servicejobs.scss";

const ServiceJobs = () => {
  return (
    <section className="section service-jobs-section">
      <article className="service container">
        <header>
          <p className="info-above-title">Service</p>
          <h2 className="title">
            Keine Angst, wir <br /> beißen nicht.
          </h2>
        </header>
        <div className="content">
          <p className="info-text">
            At vero eos et accusam et justo duo dolores et ea rebum, at vero eos
            et accusam et justo duo dolores et ea rebumstet clita kasd
            gubergren.
          </p>
          <div className="button-container">
            <button className="button">Kontakt</button>
          </div>
        </div>
      </article>

      <article className="jobs container">
        <header>
          <p className="info-above-title">Jobs</p>
          <h2 className="title">
            Du willst ein Teil von <br /> uns sein?
          </h2>
        </header>
        <div className="content">
          <p className="info-text">
            At vero eos et accusam et justo duo dolores et ea rebum, at vero eos
            et accusam et justo duo dolores et ea rebumstet clita kasd
            gubergren.
          </p>
          <div className="button-container">
            <button className="button">Jobangebote</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ServiceJobs;
