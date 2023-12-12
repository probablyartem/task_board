import React from 'react';

class classCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0

        }
        this.Increment = this.Increment.bind(this)
        this.Decrement = this.Decrement.bind(this)

    }
    Increment() {
        this.setState({count:this.state.count + 1})

    }

    Decrement() {
        this.setState({count:this.state.count - 1})
    }
     render() {
         return (

             <div>
             <h1>{this.state.count}</h1>
             <button onClick={this.Increment}>Increment</button>
             <button onClick={this.Decrement}>Decrement</button>
             </div>

         )

     }


}

export default classCounter;
