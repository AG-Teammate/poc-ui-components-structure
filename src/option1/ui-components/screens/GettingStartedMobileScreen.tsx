import React from "react";
import {observer} from "mobx-react";
import {Screen} from "./ScreenBase";
import {GettingStartedCardContents} from "../cards/GettingStartedCard/GettingStartedCardContents";

export interface IGettingStartedScreenOrModalProps {
    onGettingStartedHelpAudioTap: () => void //TODO any additional props like isPlaying?
    onGettingStartedCloseTap: () => void
}

export const GettingStartedMobileScreen: React.FC<{ gettingStartedProps: IGettingStartedScreenOrModalProps }>
    = observer(function GettingStartedMobileScreen ({gettingStartedProps}) {
    const headerProps = {
        text: "Mobile Getting Started",
        onMenuCloseClick: gettingStartedProps.onGettingStartedCloseTap
    };

    return (<Screen headerProps={headerProps}>
        <button onClick={gettingStartedProps.onGettingStartedHelpAudioTap}>Audio</button>
        <GettingStartedCardContents/>
    </Screen>)
});
