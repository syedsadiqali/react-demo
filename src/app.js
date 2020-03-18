import React, { useState, useEffect } from "react";
// default import
// import testComponent from './components/testComponent'; 
// normal imports
import {TestComponent} from './components/testComponent';

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Hello");
//   });

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <TestComponent count={this.state.count}/>
        <input type="text" onChange={(event)=>this.handleChange(event)}/> 
        <button onClick={(event) => this.handleClick("hello")}>Add</button>
      </div>
    );
  }

  handleChange = (e) => {
    console.log(e.target.value);
  }
// () => {
//   this.setState({count:this.state.count+1});
// }

// event handling can be called in follwing
// this.handleClick -  reference to our method
// this.handleClick with parameter - (event) => this.handleClick(a, b, c)




  handleClick = (a) => {
    console.log(a);
    this.setState({count:this.state.count+1});
  };
  

  // setCount(count){
  //   this.setState({count:count+1});
  // }
}

export default App;
