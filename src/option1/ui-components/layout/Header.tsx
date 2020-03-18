import React from "react";
import {observer} from "mobx-react";
import {IHeaderProps} from "./interfaces/IHeaderProps";
import useIsMobileHook from "../../useIsMobileHook";
import {HeaderMobile} from "./HeaderMobile";
import {HeaderDesktop} from "./HeaderDesktop";

export const Header: React.FC<{ headerProps: IHeaderProps }> = observer(function Header({headerProps}) {
    const isMobile = useIsMobileHook();
    return isMobile ? <HeaderMobile headerProps={headerProps}/> : <HeaderDesktop headerProps={headerProps}/>;
});
