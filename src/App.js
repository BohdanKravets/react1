import {
    BrowserRouter as Router
}
    from "react-router-dom";
import Routes from "./components/routes/Routes";
import Menu from "./components/menu/Menu";


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