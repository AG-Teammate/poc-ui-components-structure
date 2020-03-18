import {IPracticeCardProps, PracticeCard} from "../cards/PracticeCard";
import React from "react";
import {IScreenProps, Screen} from "./ScreenBase";
import {GettingStartedCard, IGettingStartedCardProps} from "../cards/GettingStartedCard";
import {observer} from "mobx-react";
import {IMenuProps} from "./MobileMenuScreen";
import {IHeaderProps} from "../layout/interfaces/IHeaderProps";

export interface IDashboardScreenProps extends IScreenProps {
    //cards
    practiceCardProps: IPracticeCardProps | null
    gettingStartedCardProps: IGettingStartedCardProps | null
    isMyInterviewsCardVisible: boolean
    isTodayTipCardVisible: boolean

    //menu
    onMenuTap: () => void
    menuProps?: IMenuProps | undefined
}

//dashboard seems responsive so no Mobile/Desktop distinction
export const DashboardScreen: React.FC<{ dashboardScreenProps: IDashboardScreenProps }> =
    observer(function DashboardScreen({dashboardScreenProps, children}) {
            //this is incorrect since welcome back should be displayed if any interviews are complete. Just for demo purposes
            const welcomeText = dashboardScreenProps.userInfo && dashboardScreenProps.userInfo.userFirstName ? `Welcome, ${dashboardScreenProps.userInfo.userFirstName}.` : "Welcome back.";
            const headerProps: IHeaderProps = { //todo discuss this
                text: welcomeText,
                onMenuButtonClick: dashboardScreenProps.onMenuTap,
                menuProps: dashboardScreenProps.menuProps
            };
            return (
                <Screen headerProps={headerProps} userInfo={dashboardScreenProps.userInfo}>
                    {/*this just displays modal for demo purposes. Whether to pass modal via children or not on desktop is TBD*/}
                    {children}
                    {dashboardScreenProps.practiceCardProps &&
                    <PracticeCard practiceCardProps={dashboardScreenProps.practiceCardProps}/>}

                    {dashboardScreenProps.gettingStartedCardProps &&
                    <GettingStartedCard gettingStartedCardProps={dashboardScreenProps.gettingStartedCardProps}/>}
                </Screen>
            )
        }
    );
//this not working for some reason https://mobx.js.org/best/pitfalls.html#the-display-name-of-react-components-is-not-set
DashboardScreen.displayName = "DashboardScreen";
