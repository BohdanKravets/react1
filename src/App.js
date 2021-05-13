import {BrowserRouter as Router} from 'react-router-dom'
import Menu from "./components/menu/Menu";
import Routes from "./routes/routes";

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