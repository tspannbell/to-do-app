import logo from "./logo.svg";
import "./App.css";
import React from "react";
import List from "./components/List";

class App extends React.Component {
  //tracking user input: using form or input field
  // onChange is probably needed
  //on Submit is deff needed

  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      notes: [],
    };
  }

  onChange = (event) => {
    this.setState({
      noteText: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.setState({
      noteText: "",
      notes: [...this.state.notes, this.state.noteText],
    });
    console.log(this.state.notes);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.noteText}
            onChange={this.onChange}
            placeholder="Type Here To Add A Task"
          />
        </form>
        <List notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
