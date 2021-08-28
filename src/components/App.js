import Header from "./header/Header";
import HomePage from "./homePageComponents/HomePage";
import ReviewPage from "./reviewPageComponents/ReviewPage";
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default function App() {
    const [selectedOptions, setSelectedOptions] = useState({});

    return (
        <>
            <Header />

            <Router>
                <Switch>
                    <Route path="/review">
                        <>
                            <ReviewPage redirectTo="/" selectedOptions={selectedOptions} />
                        </>
                    </Route>
                    
                    <Route path="/">
                        <>
                            <HomePage redirectTo="/review" saveOptions={setSelectedOptions} />
                        </>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}