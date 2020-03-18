import React from "react";
import {IHeaderProps} from "./interfaces/IHeaderProps";
import {observer} from "mobx-react";

export const HeaderMobile: React.FC<{ headerProps: IHeaderProps }> = observer(function HeaderMobile({headerProps}) {
    //left button
    let leftButton = null;
    if (headerProps.onMenuButtonClick) leftButton = "menu";
    else if (headerProps.onMenuCloseClick) leftButton = "close";

    return <div>
        <span className={"left"}>
            {leftButton === "menu" && <button onClick={headerProps.onMenuButtonClick}>☰</button>}
            {leftButton === "close" && <button onClick={headerProps.onMenuCloseClick}>X</button>}
        </span>
        M:{headerProps.text}
    </div>;
});
