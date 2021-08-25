import Header from "./Header";
import HomePage from "./HomePage";
import ReviewOrderButton from './ReviewOrderButton';
import ReviewPage from "./ReviewPage";
import OrderButtonsContainer from "./OrderButtonsContainer";
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
                            <HomePage />
                            <ReviewOrderButton redirectTo="/review" />
                        </>
                    </Route>

                    <Route path="/review">
                        <>
                            <ReviewPage />
                            <OrderButtonsContainer redirectTo="/" />
                        </>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}