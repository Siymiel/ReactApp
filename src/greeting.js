import React from 'react';
import ReactDOM from 'react-dom';

// Using State
// class Counter extends React.Component{
//     state = {
//         counter: 0
//     }
 
//     increment = () => {
//         this.setState({
//             counter: this.state.counter + 1
//         });
//     }

//     componentDidUpdate(){alert("Number of Clicks:" + this.state.counter)}

//     render() {
//         return (<div>
//             <p>{this.state.counter}</p>
//             <button onClick={this.increment}>Increment</button>
//         </div>);
//     }
// }


// Using Hooks - useState
// function Counter()
// {
//     const [counter, setCounter] = useState(0);

//     function increment()
//     {
//         setCounter(counter + 1);
//     }

//     return(<div>
//         <p>{counter}</p>
//         <button onClick={increment}>increment</button>
//     </div>);
// }

function MyList(props){   
    const arr = props.data;
    const listItems = arr.map((val, index) => <li key={index}>{val}</li>);

    return (<ul>{listItems}</ul>);
}

const arr = ["A", "B", "C"];
const elem = <MyList data={arr}/>
ReactDOM.render(
    elem,
    document.getElementById('root')
);
export default MyList; 