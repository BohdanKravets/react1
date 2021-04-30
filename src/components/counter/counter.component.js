export default function Counter(props){

    let {counter,changeCounter} = props;
    return  <div>
        <p>counter is {counter}</p>
        <button onClick={(ev) => changeCounter(ev.target.innerText)}>+1</button>
        <button onClick={(ev) => changeCounter(ev.target.innerText)}>-1</button>
        <button onClick={(ev) => changeCounter(ev.target.innerText)}>reset</button>
        <button onClick={(ev) => changeCounter(ev.target.innerText)}>+100</button>
        <button onClick={(ev) => changeCounter(ev.target.innerText)}>-100</button>

    </div>
}