import React from "react";
import {LanguageInfosProvider} from "./contexts/language-infos-context";
import Dashboard from "./pages/dashboard";

/**
 * App component
 *
 * @constructor
 *
 * @return JSX.Element
 */
const App: React.FC = (): JSX.Element => {
    return (
        <div className="container p-3" style={{minWidth: "90%"}} data-test="component-app">
            <LanguageInfosProvider>
                <Dashboard/>
            </LanguageInfosProvider>

        </div>
    );
};

export default App;