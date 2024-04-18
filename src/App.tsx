import { Container } from 'react-bootstrap';
import './App.css';
import Booklist from './Component/Booklist/Booklist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Component/Booklist/blazesoftImage.png'

function App() {
  return (

    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <Navbar.Brand href="/">Blazesoft Bookstore</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="AppContent">
        <h1>
          Welcome to Blazesoft bookstore!
        </h1>
        <p>
          You can add a new book by clicking the add book button on the right<br />
          You can also delete by clicking trashcan at the bottom or modify an existing book by clicking the book<br />
          Duplicate book titles will be assumed as modifying as the title is used as an id
        </p>
        <Booklist />
      </div>
    </div>

  );
}

export default App;
