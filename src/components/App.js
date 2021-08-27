import Header from "./Header";
import HomePage from "./homePageComponents/HomePage";
import ReviewPage from "./reviewPageComponents/ReviewPage";
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

let selectedOptions = {teste:"teste"};


export default function App() {
    const [selectedOptions, setSelectedOptions] = useState({});

    return (
        <>
            <Header />

            <Router>
                <Switch>
                    <Route exact path="/">
                        <>
                            <HomePage redirectTo="/review" saveOptions={setSelectedOptions}/>
                        </>
                    </Route>

                    <Route path="/review">
                        <>
                            <ReviewPage redirectTo="/" selectedOptions = {selectedOptions}/>
                        </>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}