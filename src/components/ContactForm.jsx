import "../styles/stylesheets/contactform.scss";

const ContactForm = () => {
  return (
    <section className="section contact-form-section">
      <p className="info-above-title">Kontaktformular</p>
      <h2 className="title">Schreib uns</h2>
      <form className="form">
        <div className="form-field">
          <label htmlFor="vorname">Vorname</label>
          <input type="text" id="vorname" placeholder="Max" />
        </div>
        <div className="form-field">
          <label htmlFor="nachname">Nachname</label>
          <input type="text" id="nachname" placeholder="Mustermann" />
        </div>
        <div className="form-field">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            required
            placeholder="maxmustermann@email.com"
          />
        </div>
        <button className="button">Senden</button>
      </form>
    </section>
  );
};

export default ContactForm;
