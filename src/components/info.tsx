import React from "react";

export interface InfoProps {
    label: string;
    value: string | number;
    href?: string;
}

/**
 * Info component
 *
 * @param label
 * @param value
 * @param valueAttributes
 *
 * @constructor
 *
 * @return JSX.Element
 */
const Info: React.FC<InfoProps> = ({label, value, href}: InfoProps): JSX.Element => {
    return (
        <div data-test="component-info">
            <div className="text-uppercase small" data-test="element-label">{label}</div>
            <div className="h5" data-test="element-value">
                {
                    href ?
                        <a href={href} {...(href === "#" &&
                            {onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()})}>{value}</a>
                        : value
                }
            </div>
        </div>
    );
};

export default Info;