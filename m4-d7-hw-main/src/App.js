import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./components/Registration";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <WarningSign text="Watch out again!" /> */}
          {/* <MyBadge text="NEW!!" color="info" /> */}
          {/* <SingleBook book={fantasyBooks[0]} /> */}
          <BookList books={fantasyBooks} />
          <TopNavbar />
          <Route path="/registration " exact component={Registration} />
        </header>
      </div>
    </Router>
  );
}

export default App;
