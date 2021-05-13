import Casts from "../components/casts/Casts";
import {Route, Switch} from 'react-router-dom'
import CastDetails from "../components/castDetails/CastDetails";
import Inventories from "../inventories/Inventories";
import InventoryDetails from "../components/inventoryDetails/InventoryDetails";

export default function Routes() {
    return(
        <div>
            <Switch>
                <Route exact path={'/'} render={() => <h1>Home</h1>}/>
                <Route exact path={'/casts'} component={Casts}/>
                <Route path={'/casts/:id'} component={CastDetails}/>
<Route exact path={'/inventories'} component={Inventories}/>
<Route path={'/inventories/:id'} component={InventoryDetails}/>
            </Switch>
        </div>
    );
}