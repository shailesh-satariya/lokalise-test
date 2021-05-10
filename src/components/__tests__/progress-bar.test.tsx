import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../test/utils";
import ProgressBar, {ProgressBarProps} from "../progress-bar";

const defaultProps: ProgressBarProps = {
    progress: 25
};

/**
 * Factory function to create a ShallowWrapper for the ProgressBar component.
 * @function setup
 *
 * @param {ProgressBarProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: ProgressBarProps = defaultProps): ShallowWrapper => {
    return shallow(<ProgressBar {...props}/>);
};

describe("renders component without errors", () => {
    test(`renders progress bar component`, () => {
        const wrapper: ShallowWrapper = setup();
        const componentInfo = findByTestAttr(wrapper, "component-progress-bar");

        expect(componentInfo.length).toBe(1);
    });
});

describe("renders component with correct class", () => {
    const wrapper: ShallowWrapper = setup();

    test(`progress bar has danger class when progress is less than 50`, () => {
        const componentInfo = findByTestAttr(wrapper, "component-progress-bar");
        expect(componentInfo.prop("variant")).toBe("danger");
    });

    test(`progress bar has info class when progress is greater than or equal 50`, () => {
        wrapper.setProps({progress: 75});
        const componentInfo = findByTestAttr(wrapper, "component-progress-bar");
        expect(componentInfo.prop("variant")).toBe("info");
    });
});