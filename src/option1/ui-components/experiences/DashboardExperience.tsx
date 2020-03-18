import {DashboardScreen, IDashboardScreenProps} from "../screens/DashboardScreen";
import {GettingStartedMobileScreen, IGettingStartedScreenOrModalProps} from "../screens/GettingStartedMobileScreen";
import React from "react";
import {observer} from "mobx-react";
import useIsMobileHook from "../../useIsMobileHook";
import {GettingStartedDesktopModal} from "../modals/GettingStartedDesktopModal";
import {MobileMenuScreen} from "../screens/MobileMenuScreen";

export interface IDashboardExperienceProps extends IDashboardScreenProps, IGettingStartedScreenOrModalProps {
    isGettingStartedHelpVisible: boolean //Screen on mobile or modal on desktop
}

export const DashboardExperience: React.FC<{ dashboardExperienceProps: IDashboardExperienceProps }> = observer(function DashboardExperience({dashboardExperienceProps}) {
    const isMobile = useIsMobileHook();
    console.log(`DashboardExperience re-render: isMobile=${isMobile}`); //for demo debug only
    let showDashboardScreen = !isMobile || !dashboardExperienceProps.isGettingStartedHelpVisible; //screen is shown on Desktop always (modal is on top) or on mobile if no screen over
    let showGettingStartedMobileScreen = isMobile && dashboardExperienceProps.isGettingStartedHelpVisible;
    let showGettingStartedDesktopModal = !isMobile && dashboardExperienceProps.isGettingStartedHelpVisible;
    let showMobileMenu = isMobile && dashboardExperienceProps.menuProps && dashboardExperienceProps.menuProps.isMenuOpen;
    if (showMobileMenu) {
        showDashboardScreen = showGettingStartedMobileScreen = false; //mobile menu takes priority
    }
    return <>
        {showDashboardScreen && <DashboardScreen dashboardScreenProps={dashboardExperienceProps}>
            {showGettingStartedDesktopModal &&
            <GettingStartedDesktopModal gettingStartedProps={dashboardExperienceProps}/>}
        </DashboardScreen>}
        {showGettingStartedMobileScreen && <GettingStartedMobileScreen gettingStartedProps={dashboardExperienceProps}/>}
        {showMobileMenu && <MobileMenuScreen menuProps={dashboardExperienceProps.menuProps!}/>}
    </>
});
