import Header from "./Header";
import HomePage from "./homePageComponents/HomePage";
import ReviewPage from "./reviewPageComponents/ReviewPage";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function App() {
    return (
        <>
            <Header />

            <Router>
                <Switch>
                    <Route exact path="/">
                        <>
                            <HomePage redirectTo="/review"/>
                        </>
                    </Route>

                    <Route path="/review">
                        <>
                            <ReviewPage redirectTo="/"/>
                        </>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}