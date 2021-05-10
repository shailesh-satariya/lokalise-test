import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {findByTestAttr} from "../../../test/utils";
import LanguageInfoItem, {LanguageInfoItemProps} from "../language-info-item";
import LanguageInfos from "../../../data/language-items.json";

const defaultProps: LanguageInfoItemProps = {
    info: LanguageInfos[0],
    removeLanguageInfo: () => {
    }
};

/**
 * Factory function to create a ShallowWrapper for the LanguageInfoItem component.
 * @function setup
 *
 * @param {LanguageInfoItemProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: LanguageInfoItemProps = defaultProps): ShallowWrapper => {
    return shallow(<LanguageInfoItem {...props}/>);
};

describe("renders component & elements without errors", () => {
    const wrapper: ShallowWrapper = setup();
    test(`renders language info item component`, () => {
        const componentLanguageInfoItem = findByTestAttr(wrapper, "component-language-info-item");

        expect(componentLanguageInfoItem.length).toBe(1);
    });

    test(`renders link element`, () => {
        const elementLink = findByTestAttr(wrapper, "element-link");

        expect(elementLink.length).toBe(1);
    });

    test(`renders flag element`, () => {
        const elementFlag = findByTestAttr(wrapper, "element-flag");

        expect(elementFlag.length).toBe(1);
    });

    test(`renders dropdown element`, () => {
        const elementDropdown = findByTestAttr(wrapper, "element-dropdown");

        expect(elementDropdown.length).toBe(1);
    });

    test(`renders dropdown toggle element`, () => {
        const elementDropdownToggle = findByTestAttr(wrapper, "element-dropdown-toggle");

        expect(elementDropdownToggle.length).toBe(1);
    });

    test(`renders delete dropdown item element`, () => {
        const elementDeleteDropdownItem = findByTestAttr(wrapper, "element-delete-dropdown-item");

        expect(elementDeleteDropdownItem.length).toBe(1);
    });

    test(`renders info elements`, () => {
        const elementsInfo = findByTestAttr(wrapper, "element-info");

        expect(elementsInfo.length).toBe(3);
    });
});

test("calls `removeLanguageInfo` prop when select value is changed and add button is clicked", () => {
    const removeLanguageInfoMock = jest.fn();
    const props: LanguageInfoItemProps = {...defaultProps, removeLanguageInfo: removeLanguageInfoMock};

    const wrapper = setup(props);
    const elementDeleteDropdownItem = findByTestAttr(wrapper, "element-delete-dropdown-item");
    elementDeleteDropdownItem.simulate("click");
    expect(removeLanguageInfoMock).toHaveBeenCalled();
});