import './App.css';
import Booklist from './Component/Booklist/Booklist';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppContent">
        <h1>
          Welcome to Blazesoft bookstore!
        </h1>
        <p>
          You can add a new book by clicking the add book button on the right <br />
          You can also delete by clicking trashcan at the bottom or modify an existing book by clicking the book <br />
          Duplicate book titles will be assumed as modifying as the title is used as an id
        </p>
        <Booklist />
      </div>
    </div>

  );
}

export default App;
