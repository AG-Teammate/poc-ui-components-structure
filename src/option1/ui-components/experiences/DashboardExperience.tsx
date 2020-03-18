import {DashboardScreen, IDashboardScreenProps} from "../screens/DashboardScreen";
import {GettingStartedMobileScreen, IGettingStartedScreenOrModalProps} from "../screens/GettingStartedMobileScreen";
import React from "react";
import {observer} from "mobx-react";
import useIsMobileHook from "../../useIsMobileHook";
import {GettingStartedDesktopModal} from "../modals/GettingStartedDesktopModal";
import {MobileMenuScreen} from "../screens/MobileMenuScreen";
import {Case, Default, Switch} from "../util/Switch";

export interface IDashboardExperienceProps extends IDashboardScreenProps, IGettingStartedScreenOrModalProps {
    isGettingStartedHelpVisible: boolean //Screen on mobile or modal on desktop
}

export const DashboardExperience: React.FC<{ dashboardExperienceProps: IDashboardExperienceProps }> = observer(function DashboardExperience({dashboardExperienceProps}) {
    const isMobile = useIsMobileHook();
    console.log(`DashboardExperience re-render: isMobile=${isMobile}`); //for demo debug only
    let showGettingStartedDesktopModal = !isMobile && dashboardExperienceProps.isGettingStartedHelpVisible;

    return <Switch>
        <Case if={isMobile && dashboardExperienceProps.menuProps && dashboardExperienceProps.menuProps.isMenuOpen}>
            <MobileMenuScreen menuProps={dashboardExperienceProps.menuProps!}/>
        </Case>
        <Case if={isMobile && dashboardExperienceProps.isGettingStartedHelpVisible}>
            <GettingStartedMobileScreen gettingStartedProps={dashboardExperienceProps}/>
        </Case>
        <Default>
            <DashboardScreen dashboardScreenProps={dashboardExperienceProps}>
                {showGettingStartedDesktopModal &&
                <GettingStartedDesktopModal gettingStartedProps={dashboardExperienceProps}/>}
            </DashboardScreen>
        </Default>
    </Switch>
});
