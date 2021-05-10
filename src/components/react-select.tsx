import React from "react";
import Select from "react-select";
import {SelectComponentsProps} from "react-select/base";
import "./react-select.scss";

/**
 * ReactSelect component
 *
 * @param props
 *
 * @constructor
 *
 * @return JSX.Element
 */
const ReactSelect: React.FC<SelectComponentsProps> = (props: SelectComponentsProps): JSX.Element => {
    const selectProps: SelectComponentsProps = {...props, classNamePrefix: "react-select"};
    return (
        <Select {...selectProps} data-test="component-react-select"/>
    );
};

export default ReactSelect;