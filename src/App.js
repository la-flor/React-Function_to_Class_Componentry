import React from "react";
import JokeList from "./JokeList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <JokeList />
      </div>
    );
  }
}

export default App;


//  prior code shown below

// function app() {
//   return (
//     <div className="App">
//       <JokeList />
//     </div>
//   );
// }
