import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../../test/utils";
import DashboardSidebar, {DashboardSidebarProps} from "../dashboard-sidebar";
import LanguageInfos from "../../../data/language-items.json";

const defaultProps: DashboardSidebarProps = {
    items: LanguageInfos
};

/**
 * Factory function to create a ShallowWrapper for the DashboardSidebar component.
 * @function setup
 *
 * @param {DashboardSidebarProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: DashboardSidebarProps = defaultProps): ShallowWrapper => {
    return shallow(<DashboardSidebar {...props}/>);
};

describe("renders component & elements without errors", () => {
    const wrapper: ShallowWrapper = setup();
    test(`renders dashboard sidebar component`, () => {
        const componentDashboardSidebar = findByTestAttr(wrapper, "component-dashboard-sidebar");

        expect(componentDashboardSidebar.length).toBe(1);
    });

    test(`renders link element`, () => {
        const elementLink = findByTestAttr(wrapper, "element-link");

        expect(elementLink.length).toBe(1);
    });

    test(`renders progress bar element`, () => {
        const elementProgressBar = findByTestAttr(wrapper, "element-progress-bar");

        expect(elementProgressBar.length).toBe(1);
    });

    test(`renders info elements`, () => {
        const elementsInfo = findByTestAttr(wrapper, "element-info");

        expect(elementsInfo.length).toBe(5);
    });
});