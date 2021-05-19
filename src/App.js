//Зробити компоненту Counter, в якій будуть кнопки +1, -1, +100, -100.
// Де Counter це окрема компонента, на яку ми попадаємо через роути. Функція reducer винесена в окремий файл!
import Menu from "./components/menu/Menu";
import Routes from "./components/routes/Routes";
import {
    BrowserRouter as Router
} from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <div>
                <Menu/>
                <Routes/>
            </div>
        </Router>
    );
}