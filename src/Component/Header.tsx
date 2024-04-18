import { Container, Navbar } from 'react-bootstrap'
import logo from '../Component/Booklist/blazesoftImage.png'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />
        <Navbar.Text>Jaewon Lee</Navbar.Text>
        <Navbar.Brand href="/">Blazesoft Bookstore</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
