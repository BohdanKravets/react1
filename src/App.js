import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
}
    from 'react-router-dom'
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import UserDetails from "./components/userDetails/UserDetails";

// Беремо цю апі - https://reqres.in/
// з неї використовувати тільки get запити на list users та single user.
//     На головній сторінці є роут який одразу відображає  користувачів. (Зауважте, що апі не віддає всіх користувачів,а має queryParametr/serach з назвою page , який характеризує пагінацію, та віддає по 10 об'єктів за один запит).
// Внизу є 2 кнопки при натисканні на які ви ідете до наступної/попередньої сторінки (змінюючи page параметр).
// при клыку на користувача відбувається перехід на сторінку з детальною інформацією користувача
export default function App() {


    return (
        <Router>
            <div>
                <Link to={'/'}>home </Link>
                <Link to={{pathname: '/users', search: `?page=1`}}>users</Link>

                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/users'} component={Users}/>
                    <Route path={'/users?page=:id/:id'} component={UserDetails}/>
                </Switch>
            </div>
        </Router>
    );
}