import React, {LegacyRef} from "react";
import Flag from "react-world-flags";
import {Dropdown} from "react-bootstrap";
import {LanguageInfo} from "../../types";
import ProgressBar from "../../components/progress-bar";
import Info, {InfoProps} from "../../components/info";
import "./language-info-item.scss";

export interface LanguageInfoItemProps {
    info: LanguageInfo;
    removeLanguageInfo: () => void;
}

const CustomToggle = React.forwardRef(({children, onClick}: any, ref: LegacyRef<HTMLAnchorElement> | undefined) => (
    <a
        href="/#"
        ref={ref}
        className="text-dark text-decoration-none font-weight-bold"
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

/**
 * LanguageInfoItem component
 *
 * @param info
 * @param removeLanguageInfo
 *
 * @constructor
 *
 * @return JSX.Element
 */
const LanguageInfoItem: React.FC<LanguageInfoItemProps> = ({info, removeLanguageInfo}: LanguageInfoItemProps): JSX.Element => {
    const {name, countryCode, done, total, unverified}: LanguageInfo = info;
    const todo: number = total - done;
    const donePercentage = Math.round(done * 100 / total);
    const infos: InfoProps[] = [
        {label: "done", value: `${donePercentage}%`},
        {label: "todo", value: todo, href: "#"},
        {label: "unverified", value: unverified, href: "#"}
    ];

    return (
        <div className="language-item" data-test="component-language-info-item">
            <div className="d-flex">
                <div>
                    <a href="/#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
                       data-test="element-link">
                        <Flag
                            code={countryCode} height="9" data-test="element-flag"/>
                        <span className="ml-1">{name}</span>
                    </a>
                </div>
                <div className="ml-auto">
                    <Dropdown data-test="element-dropdown">
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"
                                         data-test="element-dropdown-toggle">
                            ⋯
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="right">
                            <Dropdown.Item eventKey="1" onClick={removeLanguageInfo}
                                           data-test="element-delete-dropdown-item">
                                <small>Delete language...</small>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <ProgressBar progress={donePercentage}/>
            <div className="d-flex flex-wrap">
                {
                    infos.map((info: InfoProps, index: number) => (
                        <div className={"language-item-info" + ((index === 2) ? " text-right" : "")} key={index}>
                            <Info {...info} data-test="element-info"/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LanguageInfoItem;