import React, {JSXElementConstructor, ReactElement} from "react";

export const Switch: React.FC<{ children: ReactElement<ICase | any>[] }> = ({children}) => {
    let componentToRender = <>Error rendering Switch</>;
    for (const c of children) {
        const type = c.type as JSXElementConstructor<any>;
        if (type.name === "Case") {
            if (c.props.if) {
                componentToRender = c;
                break;
            }
        } else if (type.name === "Default") {
            componentToRender = c;
        }
    }
    return <>{componentToRender}</>;
};

interface ICase {
    if: boolean | undefined
}

export const Case: React.FC<ICase> = ({children}) => {
    return <>{children}</>;
};

export const Default: React.FC = ({children}) => {
    return <>{children}</>;
};
