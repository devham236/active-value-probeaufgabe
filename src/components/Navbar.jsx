import "../styles/stylesheets/navbar.scss";
import useNavbar from "../hooks/useNavbar";

const Navbar = () => {
  const { sidebarOpened, setSidebarOpened } = useNavbar();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="company-logo">
          <img src={"/assets/logos/logo.png"} alt="company logo" />
        </div>
        <div className="menu-icon" onClick={() => setSidebarOpened(true)}>
          Menü
          <span></span>
          <span></span>
        </div>

        {sidebarOpened && (
          <div className="menu-sidebar">
            <ul className="menu-items">
              <li>Startseite</li>
              <li>Kontakt</li>
              <li>Impressum</li>
            </ul>
            <div
              className="close-menu-icon"
              onClick={() => setSidebarOpened(false)}
            >
              <span className="material-symbols-rounded">close</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
