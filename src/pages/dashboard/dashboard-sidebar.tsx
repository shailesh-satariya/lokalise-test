import React from "react";
import {LanguageInfo} from "../../types";
import ProgressBar from "../../components/progress-bar";
import Info, {InfoProps} from "../../components/info";
import "./dashboard-sidebar.scss";

export interface DashboardSidebarProps {
    items: LanguageInfo[];
}

/**
 * DashboardSidebar component
 *
 * @param items
 *
 * @constructor
 *
 * @return JSX.Element
 */
const DashboardSidebar: React.FC<DashboardSidebarProps> = ({items}: DashboardSidebarProps): JSX.Element => {
    const {total, done} = items.reduce((value: { total: number, done: number }, item: LanguageInfo) => {
        return {
            total: value.total + item.total,
            done: value.done + item.done
        };
    }, {total: 0, done: 0});

    const donePercentage = (total === 0) ? 0 : Math.round(done * 100 / total);
    const infos: InfoProps[] = [
        {label: "done", value: `${donePercentage}%`},
        {label: "base words", value: 160246},
        {label: "team", value: 26, href: "#"},
        {label: "keys", value: 1834},
        {label: "qa issues", value: 47154, href: "#"}
    ];

    return (
        <div className="sidebar" data-test="component-dashboard-sidebar">
            <a href="/#" className="text-primary h5 font-weight-normal text-decoration-none d-block mb-2"
               onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()} data-test="element-link">Sample
                Project</a>
            <ProgressBar progress={25} data-test="element-progress-bar"/>
            <div className="d-flex flex-wrap">
                {
                    infos.map((info: InfoProps, index: number) => (
                        <div className="sidebar-info" key={index}>
                            <Info {...info} data-test="element-info"/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DashboardSidebar;