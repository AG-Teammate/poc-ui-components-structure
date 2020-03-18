import React from "react";
import {IHeaderProps} from "./interfaces/IHeaderProps";
import {observer} from "mobx-react";

//desktop header is more complicated. This is just a copy of mobile to show profile dropdown ties to menu
export const HeaderDesktop: React.FC<{ headerProps: IHeaderProps }> = observer(function HeaderDesktop({headerProps}) {
    //const profileDropdownOpen = headerProps.

    return <div>
        M:{headerProps.text}
        <span className={"right"}>
            {headerProps.userInfo && headerProps.menuProps &&
            <span style={{float: "right"}}>
                {headerProps.userInfo?.userFirstName} --{" "}
                {headerProps.menuProps?.isMenuOpen ? "OPEN" : "CLOSED"}
            </span>}
        </span>
    </div>;
});
