import './App.css';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import Menu from "./components/menu/Menu";
import Routes from "./routes/Routes";

function App() {
    return (
        <Router>
            <div>
                <Menu/>
                <hr/>
                <Routes/>
                <hr/>


            </div>
        </Router>
    );
}

export default App;