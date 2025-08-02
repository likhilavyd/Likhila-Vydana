import "../styles/Header.css";
function Header() {
  return (
        <header className="header py-3 sticky-top z-3">
        <nav className="container d-flex justify-content-between align-items-center">
            <h1 className="fs-4 m-0">Likhila Vydana</h1>
            <ul className="nav gap-3">
            <li className="nav-item">
                <a className="nav-link text-white fw-medium" href="#about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white fw-medium" href="#personal details">Personal Details</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white fw-medium" href="#resume">Resume</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white fw-medium" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white fw-medium" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white fw-medium" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-white fw-medium" href="#contact">Contact</a>
            </li>
            </ul>
        </nav>
        </header>

  )
}

export default Header;