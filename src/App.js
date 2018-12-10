import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./Utils/BooksAPI";
import "./App.css";

import ListBooks from "./componentes/ListBooks";
import SearchBooks from "./componentes/SearchBooks";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.ListBooks();
  }

  ListBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <ListBooks books={this.state.books} />}
        />
        <Route
          exact
          path="/search"
          render={({ history }) => <SearchBooks books={this.state.Books} />}
        />
      </div>
    );
  }
}

export default BooksApp;
