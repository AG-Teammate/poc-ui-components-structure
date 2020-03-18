import {DashboardScreen, IDashboardScreenProps} from "../screens/DashboardScreen";
import {GettingStartedMobileScreen, IGettingStartedScreenOrModalProps} from "../screens/GettingStartedMobileScreen";
import React from "react";
import {observer} from "mobx-react";
import {MobileMenuScreen} from "../screens/MobileMenuScreen";
import {Case, Default, Switch} from "../util/Switch";

export interface IDashboardExperienceProps extends IDashboardScreenProps, IGettingStartedScreenOrModalProps {
    isGettingStartedHelpVisible: boolean //Screen on mobile or modal on desktop
}

export const DashboardMobileExperience: React.FC<{ dashboardExperienceProps: IDashboardExperienceProps }> = observer(function DashboardMobileExperience({dashboardExperienceProps}) {
    return <Switch>
        <Case if={dashboardExperienceProps.menuProps && dashboardExperienceProps.menuProps.isMenuOpen}>
            <MobileMenuScreen menuProps={dashboardExperienceProps.menuProps!}/>
        </Case>
        <Case if={dashboardExperienceProps.isGettingStartedHelpVisible}>
            <GettingStartedMobileScreen gettingStartedProps={dashboardExperienceProps}/>
        </Case>
        <Default>
            <DashboardScreen dashboardScreenProps={dashboardExperienceProps}>
            </DashboardScreen>
        </Default>
    </Switch>
});
