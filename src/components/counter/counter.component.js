export default function Counter(props){

    let {counter,increment,decrement,reset,plusHundred,minusHundred} = props;
    return  <div>
        <p>counter is {counter}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>reset</button>
        <button onClick={plusHundred}>+100</button>
        <button onClick={minusHundred}>-100</button>

    </div>
}