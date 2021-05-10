import {shallow, ShallowWrapper} from "enzyme";
import React from "react";
import {LanguageInfo} from "../../../types";
import AddLanguageInfosButton, {AddLanguageInfosButtonProps} from "../add-language-infos-button";
import {findByTestAttr} from "../../../test/utils";


const defaultProps: AddLanguageInfosButtonProps = {
    addLanguages: (infos: LanguageInfo[]) => {
    }
};


const values = [{label: "foo", value: "nkwnkw8"}];

/**
 * Factory function to create a ShallowWrapper for the AddLanguageInfosButton component.
 * @function setup
 *
 * @param {AddLanguageInfosButtonProps} props
 *
 * @return {ShallowWrapper}
 */
const setup = (props: AddLanguageInfosButtonProps = defaultProps): ShallowWrapper => {
    return shallow(<AddLanguageInfosButton {...props}/>);
};

describe("renders component & elements without errors", () => {
    const wrapper: ShallowWrapper = setup();

    test(`renders add-language-infos-button component`, () => {
        const componentAddLanguageInfosButton = findByTestAttr(wrapper, "component-add-language-infos-button");

        expect(componentAddLanguageInfosButton.length).toBe(1);
    });

    test(`renders button add languages`, () => {
        const btnAddLanguages = findByTestAttr(wrapper, "btn-add-languages");

        expect(btnAddLanguages.length).toBe(1);
    });

    test(`renders modal element`, () => {
        const elementModal = findByTestAttr(wrapper, "element-modal");

        expect(elementModal.length).toBe(1);
    });

    test(`renders select element`, () => {
        const elementSelect = findByTestAttr(wrapper, "element-select");

        expect(elementSelect.length).toBe(1);
    });

    test(`renders button cancel`, () => {
        const btnCancel = findByTestAttr(wrapper, "btn-cancel");

        expect(btnCancel.length).toBe(1);
    });

    test(`renders button add`, () => {
        const btnAdd = findByTestAttr(wrapper, "btn-add");

        expect(btnAdd.length).toBe(1);
    });
});


test("calls `addLanguages` prop when select value is changed and add button is clicked", () => {
    const addLanguagesMock = jest.fn();
    const props: AddLanguageInfosButtonProps = {...defaultProps, addLanguages: addLanguagesMock};

    const wrapper = setup(props);
    const elementSelect = findByTestAttr(wrapper, "element-select");
    (elementSelect.prop("onChange") as Function)(values);
    const btnAdd = findByTestAttr(wrapper, "btn-add");
    btnAdd.simulate("click");
    expect(addLanguagesMock).toHaveBeenCalled();
});


describe("state controlled values value", () => {
    let wrapper: ShallowWrapper;
    const setState = jest.fn();

    beforeEach(() => {
        const useStateMock: any = (initState: any) => [initState, setState];
        jest.spyOn(React, "useState").mockImplementation(useStateMock);
        wrapper = setup();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("state values updates when select element values changed", () => {
        const elementSelect = findByTestAttr(wrapper, "element-select");
        (elementSelect.prop("onChange") as Function)(values);
        expect(setState).toHaveBeenCalledWith([...values]);
    });
});

describe("state controlled modal show value", () => {
    let wrapper: ShallowWrapper;
    const setState = jest.fn();

    beforeEach(() => {
        const useStateMock: any = (initState: any) => [initState, setState];
        const useStateMockValue: any = (initState: any) => [values, setState];
        jest.spyOn(React, "useState")
            .mockImplementationOnce(useStateMock)
            .mockImplementationOnce(useStateMockValue)
            .mockImplementationOnce(useStateMock);
        wrapper = setup();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("state show updates when btn add languages has been clicked", () => {
        const btnAddLanguages = findByTestAttr(wrapper, "btn-add-languages");
        btnAddLanguages.simulate("click");
        expect(setState).toHaveBeenCalledWith(true);
    });

    test("state show updates when btn cancel has been clicked", () => {
        const btnCancel = findByTestAttr(wrapper, "btn-cancel");
        btnCancel.simulate("click");
        expect(setState).toHaveBeenCalledWith(false);
    });

    test("state show updates when modal on hide called", () => {
        const elementModal = findByTestAttr(wrapper, "element-modal");

        (elementModal.prop("onHide") as Function)();
        expect(setState).toHaveBeenCalledWith(false);
    });

    test("state show updates when btn add has been clicked", () => {
        const btnAdd = findByTestAttr(wrapper, "btn-add");
        btnAdd.simulate("click");
        expect(setState).toHaveBeenCalledWith(false);
    });
});

describe("state controlled modal error value", () => {
    let wrapper: ShallowWrapper;
    const setState = jest.fn();
    const useStateMock: any = (initState: any) => [initState, setState];

    beforeEach(() => {
        jest.spyOn(React, "useState").mockImplementation(useStateMock);
        wrapper = setup();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("state error updates when btn add has been clicked", () => {
        const btnAdd = findByTestAttr(wrapper, "btn-add");
        btnAdd.simulate("click");
        expect(setState).toHaveBeenCalledWith("Select at least one language to add");
    });
});