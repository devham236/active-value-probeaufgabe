import "../styles/stylesheets/servicejobs.scss";

const ServiceJobs = () => {
  return (
    <section className="section service-jobs-section">
      <div className="service container">
        <p className="above-title">Service</p>
        <h2 className="title">
          Keine Angst wir <br /> beißen nicht.
        </h2>
        <p className="info-text">
          At vero eos et accusam et justo duo dolores et ea rebum, at vero eos
          et accusam et justo duo dolores et ea rebumstet clita kasd gubergren.
        </p>
        <button>Kontakt</button>
      </div>
      <div className="jobs container">
        <p className="above-title">Jobs</p>
        <h2 className="title">
          Du willst ein Teil von <br /> uns sein?
        </h2>
        <p className="info-text">
          At vero eos et accusam et justo duo dolores et ea rebum, at vero eos
          et accusam et justo duo dolores et ea rebumstet clita kasd gubergren.
        </p>
        <button>Jobangebote</button>
      </div>
    </section>
  );
};

export default ServiceJobs;
