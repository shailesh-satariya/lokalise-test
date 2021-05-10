import React from "react";
import {Button} from "react-bootstrap";
import LanguageInfoItem from "./language-info-item";
import DashboardSidebar from "./dashboard-sidebar";
import AddLanguageInfosButton from "./add-language-infos-button";
import {useLanguageInfos} from "../../contexts/language-infos-context";
import {LanguageInfo} from "../../types";
import "./index.scss";

/**
 * Dashboard component
 *
 * @constructor
 *
 * @return JSX.Element
 */
const Dashboard: React.FC = (): JSX.Element => {

    const [languageInfos, setLanguageInfos] = useLanguageInfos();

    const addLanguagesInfo = React.useCallback((infos: LanguageInfo[]) => {
        setLanguageInfos([...languageInfos, ...infos]);
    }, [languageInfos, setLanguageInfos]);

    const removeLanguageInfo = React.useCallback((index: number) => {
        const newInfos: LanguageInfo[] = [...languageInfos];
        newInfos.splice(index, 1);
        setLanguageInfos(newInfos);
    }, [languageInfos, setLanguageInfos]);

    return (
        <div data-test="component-dashboard">
            <div>
                <Button variant="primary" size="sm">New project ⇧-Ctrl-P</Button>
                <Button variant="outline-primary" size="sm" className="ml-2">Expand All</Button>
                <Button variant="outline-primary" size="sm" className="ml-2">Collapse All</Button>
            </div>
            <div className="dashboard-container d-flex pt-4 pb-4">
                <DashboardSidebar items={languageInfos} data-test="element-dashboard-sidebar"/>
                <div className="languages">
                    {
                        (languageInfos).map((info: LanguageInfo, index: number) => (
                            <LanguageInfoItem key={info.id} info={info}
                                              removeLanguageInfo={() => removeLanguageInfo(index)}
                                              data-test="element-language-info-item"/>
                        ))
                    }
                    <AddLanguageInfosButton addLanguages={addLanguagesInfo}/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;