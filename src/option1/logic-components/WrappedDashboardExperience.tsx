import React from "react";
import {DashboardExperience} from "../ui-components/experiences/DashboardExperience";
import {DashboardExperienceState, GettingStartedCardState, PracticeCardState} from "../stores/DashboardExperienceStore";

//todo where to instantiate this? Provider or on load? discuss as part of Mobx discussion
const store = new DashboardExperienceState();
store.practiceCardProps = new PracticeCardState();
store.gettingStartedCardProps = new GettingStartedCardState(store);

export const WrappedDashboardExperience: React.FC = () => {
    return <DashboardExperience dashboardExperienceProps={store}/>
};
