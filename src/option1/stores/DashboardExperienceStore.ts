import {action, observable} from "mobx";
import {IPracticeCardProps} from "../ui-components/cards/PracticeCard";
import {AuthStore} from "./AuthStore";
import {MenuStore} from "./MenuStore";

export class PracticeCardState {
    @observable
    lastInterviewDate: Date | null = null;
    @action
    onStartNewInterviewTap: () => void = () => {
        this.lastInterviewDate = new Date();
        console.log('onStartNewInterviewTap');
    };
    @action
    onViewLastInterviewTap: () => void = () => {
        //should redirect to another route
        console.log('navigate(/app/interviews)');
        //just for demo purposes so that page shows something
        this.lastInterviewDate = null;
    }
}

export class GettingStartedCardState {
    private dashboardState: DashboardExperienceState;

    constructor(dashboardState: DashboardExperienceState) {
        this.dashboardState = dashboardState;
    }

    @action
    onLearnMoreTap = () => this.dashboardState.onGettingStartedLearnMoreTap();
}

export class DashboardExperienceState {
    @observable
    userInfo = new AuthStore(); //we should get this form provider or something, TBD
    @observable
    menuProps = new MenuStore(); //we should get this form provider or something, TBD
    @observable
    gettingStartedCardProps: GettingStartedCardState | null = null;
    @observable
    isGettingStartedHelpVisible: boolean = false;
    @action
    onGettingStartedCloseTap: () => void = () => {
        this.isGettingStartedHelpVisible = false;
    };
    @action
    onGettingStartedHelpAudioTap: () => void = () => {
        console.log('toggle audio');
    };
    @observable
    practiceCardProps: IPracticeCardProps | null = null;

    @action
    onGettingStartedLearnMoreTap = () => {
        this.isGettingStartedHelpVisible = true;
    };

    @action
    onMenuTap = () => {
        console.log('menu tap');
        this.menuProps.isMenuOpen = true;
    };

    //below not used yet
    isMyInterviewsCardVisible: boolean = true;
    isTodayTipCardVisible: boolean = true;
}
