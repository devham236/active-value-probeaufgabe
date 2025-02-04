import { socialIconsArr } from "../utils/socialIcons";

const HeroElement = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <p className="date">April 2019</p>
        <h2 className="title">Shopware als starker Partner</h2>
        <div className="info-text">
          <p>
            Wir haben eine Vielzahl von individuellen Webshops für ein diverses
            Kundenfeld entwickelt und umgesetzt - darunter sind namhafte
            Unternehmen wie van Laack und die Rheinische Post.
          </p>
          <p>
            Bei der Umsetzung können wir auf Shopware als zuverlässigen Partner
            zurückgreifen. Durch die Business-Kooperation mit Shopware sind
            unsere zertifizierten Entwickler in der Lage, unseren Kunden immer
            die neusten, innovativsten und sichersten Shop-Lösungen anbieten zu
            können. Um immer auf dem aktuellsten Stand zu sein, treffen wir
            unseren Kooperationspartner auf der jährlichen Fachmesse „Shopware
            Community Day" und stehen in einem regelmäßigen Austausch. Dadurch
            sind wir in der Lage kurzfristig auf die neustens Entwicklungen zu
            reagieren. Dazu gehört unter anderem die Verwendung von Shopware 6 -
            wodurch wir schon jetzt qualitativ hochwertige
            Headless-Shop-Projekte (API-first) umsetzen können
          </p>
        </div>
        <div className="social-icons">
          {socialIconsArr.map((icon) => (
            <span key={icon.id} className={icon.name}>
              <img src={icon.src} alt="" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroElement;
