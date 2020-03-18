import {observer} from "mobx-react";
import {Screen} from "./ScreenBase";
import React from "react";

export interface IMenuProps {
    //screen is displayed on mobile and dropdown on desktop header
    isMenuOpen: boolean; //todo do we want to have it upper in prop hierarchy?
    onMenuCloseTap: () => void
    onMenuMyAccountTap: () => void
    onMenuMyInterviewsTap: () => void
    onMenuStartNewInterviewTap: () => void
    onMenuMyTagsTap: () => void;
    onMenuContactUsTap: () => void;
    onMenuSignoutTap: () => void;
}

export const MobileMenuScreen: React.FC<{ menuProps: IMenuProps }> = observer(function MobileMenuScreen({menuProps}) {
    return (
        <Screen headerProps={{text: "Mobile menu", onMenuCloseClick: menuProps.onMenuCloseTap}}>
            <ul>
                <li>
                    <button onClick={menuProps.onMenuMyAccountTap}>My account</button>
                </li>
                <li>
                    <button onClick={menuProps.onMenuMyInterviewsTap}>My interviews</button>
                </li>
                <li>
                    <button onClick={menuProps.onMenuStartNewInterviewTap}>Start new interview</button>
                </li>
                <li>
                    <button onClick={menuProps.onMenuMyTagsTap}>My tags</button>
                </li>
                <li>
                    <button onClick={menuProps.onMenuContactUsTap}>Contact us</button>
                </li>
            </ul>
            <button onClick={menuProps.onMenuSignoutTap}>Sign out</button>
        </Screen>
    )
});
