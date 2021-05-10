import {mount, ReactWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../../test/utils";
import Dashboard from "../index";
import {LanguageInfosProvider} from "../../../contexts/language-infos-context";

/**
 * Factory function to create a ReactWrapper for the Dashboard component.
 * @function setup
 *
 * @return {ReactWrapper}
 */
const setup = (): ReactWrapper => {
    return mount(
        <LanguageInfosProvider>
            <Dashboard/>
        </LanguageInfosProvider>
    );
};

describe("renders component & elements without errors", () => {
    const wrapper: ReactWrapper = setup();
    test(`renders info component`, () => {
        const componentInfo = findByTestAttr(wrapper, "component-dashboard");

        expect(componentInfo.length).toBe(1);
    });

    test(`renders dashboard sidebar element`, () => {
        const elementDashboardSidebar = findByTestAttr(wrapper, "element-dashboard-sidebar");

        expect(elementDashboardSidebar.length).toBe(1);
    });

    test(`renders language info item element`, () => {
        const elementLanguageInfoItem = findByTestAttr(wrapper, "element-language-info-item");

        expect(elementLanguageInfoItem.length).toBeGreaterThanOrEqual(1);
    });
});