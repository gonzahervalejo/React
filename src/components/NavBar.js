
import App from "../App"
import Header from "../Header"

const NavBar = () => {
    return (
      <Header>
        <App>
        <nav className="nav">
          <a href="../index.html" className="nav__link">link 1</a>
          <a href="../index.html" className="nav__link">link 2</a>
          <a href="../index.html" className="nav__link">link 3</a>
        </nav>
        </App>
        </Header>
      )
}
export default NavBar