import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory, withRouter } from "react-router-dom";

const TopNavbar = ({ history }) => {
  // this is a shortcut using a hook!
  // const history = useHistory()
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        {/* this is the navigation feature provided with a Link component */}
        <Link to="/" className="no-underline">
          <span className="nav-link navbar-links">Home</span>
        </Link>
        {/* this is the navigation feature provided with a function! history.push() */}
        <Nav.Link>Registration</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default withRouter(TopNavbar);
