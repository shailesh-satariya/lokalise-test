import React from "react";
import * as ReactBootstrap from "react-bootstrap";

export interface ProgressBarProps {
    progress: number;
}

/**
 * ProgressBar component
 *
 * @param progress
 *
 * @constructor
 *
 * @return JSX.Element
 */
const ProgressBar: React.FC<ProgressBarProps> = ({progress}: ProgressBarProps): JSX.Element => {
    return (
        <ReactBootstrap.ProgressBar
            variant={(progress < 50 ? "danger" : "info")}
            className="progress mb-2 mt-2" style={{height: "1px"}}
            data-test="component-progress-bar"
            now={progress}
        />
    )
        ;
};

export default ProgressBar;