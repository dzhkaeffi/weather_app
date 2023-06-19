import "../styles/header.css";
function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="theme-switch">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
