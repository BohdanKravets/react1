import './App.css';
import {useState} from "react";
import User from "./components/users/user.component";
import Counter from "./components/counter/counter.component";

const userlList = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

const App = () => {
    let [users, setsUsers] = useState(userlList);
    const deleteUser = (id) => {
        users = users.filter((user, index) => index !== id);
        setsUsers([...users]);
    }
    let [counter, setCounter] = useState(0);
    const changeCounter = (name) => {
        if(name ==='+1') {
            setCounter(++counter)
        }
        if(name ==='-1') {
            setCounter(--counter)
        }
        if(name ==='reset') {
            setCounter(0)
        }
        if(name ==='+100') {
            counter += 100
            setCounter(counter)
        }
        if(name ==='-100') {
            counter -= 100
            setCounter(counter)
        }
    }


    return <div>
        <div>
            <Counter

                counter={counter}
               changeCounter ={changeCounter}

            />
        </div>
        <div>
            {
                users.map((user, index) =>

                    <User
                        key={index}
                        id={index}
                        name={user.name}
                        age={user.age}
                        status={user.isMarried}
                        deleteUser={deleteUser}
                    />
                )
            }
        </div>
    </div>
}

export default App;