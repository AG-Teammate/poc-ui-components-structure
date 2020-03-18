//screen is just a simple wrapper for demo purposes
import React from "react";
import {IAuthorizedUserProps, IHeaderProps} from "../layout/interfaces/IHeaderProps";
import {Header} from "../layout/Header";
import {observer} from "mobx-react";
import useIsMobileHook from "../../useIsMobileHook";
import {FooterDesktop} from "../layout/FooterDesktop";

export interface IScreenProps {
    headerProps?: IHeaderProps | undefined
    userInfo?: IAuthorizedUserProps | null | undefined
}

export const Screen: React.FC<IScreenProps> = observer(function Screen({children, headerProps, userInfo}) {
        const isMobile = useIsMobileHook();
        return (
            <main>
                {/*//TODO check if this is a good solution and that it does not break mobx*/}
                {headerProps && <Header headerProps={{...headerProps, userInfo}}/>}
                <div>{children}</div>
                {!isMobile && <FooterDesktop/>}
            </main>
        )
    }
);
