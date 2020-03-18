import {IDashboardScreenProps} from "../screens/DashboardScreen";
import {IGettingStartedScreenOrModalProps} from "../screens/GettingStartedMobileScreen";
import React from "react";
import {observer} from "mobx-react";
import useIsMobileHook from "../../useIsMobileHook";
import {DashboardMobileExperience} from "./DashboardMobileExperience";
import {DashboardDesktopExperience} from "./DashboardDesktopExperience";

export interface IDashboardExperienceProps extends IDashboardScreenProps, IGettingStartedScreenOrModalProps {
    isGettingStartedHelpVisible: boolean //Screen on mobile or modal on desktop
}

export const DashboardExperience: React.FC<{ dashboardExperienceProps: IDashboardExperienceProps }> = observer(function DashboardExperience({dashboardExperienceProps}) {
    const isMobile = useIsMobileHook();

    return isMobile ? <DashboardMobileExperience dashboardExperienceProps={dashboardExperienceProps}/> :
        <DashboardDesktopExperience dashboardExperienceProps={dashboardExperienceProps}/>
});
