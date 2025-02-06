import "../styles/stylesheets/contactform.scss";

const ContactForm = () => {
  return (
    <section className="section contact-form-section">
      <header>
        <p className="info-above-title">Kontaktformular</p>
        <h2 className="title">Schreib uns</h2>
      </header>

      <form className="form">
        <div className="form-field">
          <label htmlFor="vorname">Vorname</label>
          <input type="text" id="vorname" name="vorname" placeholder="Max" />
        </div>

        <div className="form-field">
          <label htmlFor="nachname">Nachname</label>
          <input
            type="text"
            id="nachname"
            name="nachname"
            placeholder="Mustermann"
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="maxmustermann@email.com"
          />
        </div>

        <div className="form-button">
          <button className="button" type="submit">
            Senden
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
