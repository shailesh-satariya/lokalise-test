import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../test/utils";
import ReactSelect from "../react-select";
import {SelectComponentsProps} from "react-select/base";

const defaultProps: SelectComponentsProps = {
    props: {}
};

/**
 * Factory function to create a ShallowWrapper for the ReactSelect component.
 * @function setup
 *
 * @param {SelectComponentsProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: SelectComponentsProps = defaultProps): ShallowWrapper => {
    return shallow(<ReactSelect {...props}/>);
};

describe("renders components without errors", () => {
    const wrapper: ShallowWrapper = setup();
    test(`renders react select component`, () => {
        const componentReactSelect = findByTestAttr(wrapper, "component-react-select");

        expect(componentReactSelect.length).toBe(1);
    });
});