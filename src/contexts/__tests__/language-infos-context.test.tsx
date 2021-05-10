import React from "react";
import {shallow} from "enzyme";

import {LanguageInfosProvider, useLanguageInfos} from "../language-infos-context";

// a functional component that calls useLanguageInfos for our tests
const FunctionalComponent = () => {
    useLanguageInfos();
    return <div/>;
};

test("useLanguageInfos throws error when not wrapped in LanguageInfosProvider", () => {
    expect(() => {
        shallow(<FunctionalComponent/>);
    }).toThrow("useLanguageInfos must be used within a LanguageInfosProvider");
});

test("useLanguageInfos does not throw error when wrapped in LanguageInfosProvider", () => {
    expect(() => {
        shallow(
            <LanguageInfosProvider>
                <FunctionalComponent/>
            </LanguageInfosProvider>
        );
    }).not.toThrow();
});
