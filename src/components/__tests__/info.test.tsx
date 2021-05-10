import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../test/utils";
import Info, {InfoProps} from "../info";

const defaultProps: InfoProps = {
    label: "Name",
    value: "Foo"
};

/**
 * Factory function to create a ShallowWrapper for the Info component.
 * @function setup
 *
 * @param {InfoProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: InfoProps = defaultProps): ShallowWrapper => {
    return shallow(<Info {...props}/>);
};

describe("renders component & elements without errors", () => {
    const wrapper: ShallowWrapper = setup();
    test(`renders info component`, () => {
        const componentInfo = findByTestAttr(wrapper, "component-info");

        expect(componentInfo.length).toBe(1);
    });

    test(`renders label element`, () => {
        const elementLabel = findByTestAttr(wrapper, "element-label");

        expect(elementLabel.length).toBe(1);
    });

    test(`renders value element`, () => {
        const elementValue = findByTestAttr(wrapper, "element-value");

        expect(elementValue.length).toBe(1);
    });
});