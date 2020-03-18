import {DashboardScreen, IDashboardScreenProps} from "../screens/DashboardScreen";
import {IGettingStartedScreenOrModalProps} from "../screens/GettingStartedMobileScreen";
import React from "react";
import {observer} from "mobx-react";
import {GettingStartedDesktopModal} from "../modals/GettingStartedDesktopModal";

export interface IDashboardExperienceProps extends IDashboardScreenProps, IGettingStartedScreenOrModalProps {
    isGettingStartedHelpVisible: boolean //Screen on mobile or modal on desktop
}

export const DashboardDesktopExperience: React.FC<{ dashboardExperienceProps: IDashboardExperienceProps }> = observer(function DashboardDesktopExperience({dashboardExperienceProps}) {
    let showGettingStartedDesktopModal = dashboardExperienceProps.isGettingStartedHelpVisible;
    return <DashboardScreen dashboardScreenProps={dashboardExperienceProps}>
        {showGettingStartedDesktopModal &&
        <GettingStartedDesktopModal gettingStartedProps={dashboardExperienceProps}/>}
    </DashboardScreen>
});
