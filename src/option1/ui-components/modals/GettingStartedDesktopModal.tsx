import React from "react";
import {observer} from "mobx-react";
import {IGettingStartedScreenOrModalProps} from "../screens/GettingStartedMobileScreen";
import {GettingStartedCardContents} from "../cards/GettingStartedCard/GettingStartedCardContents";

export const GettingStartedDesktopModal: React.FC<{ gettingStartedProps: IGettingStartedScreenOrModalProps }>
    = observer(function GettingStartedDesktopModal({gettingStartedProps}) {
    //just for demo, probably has to use another component
    return (<div style={{position: "absolute", backgroundColor: "#eee", top: "40%", left: "40%"}}>Desktop modal
        <button onClick={gettingStartedProps.onGettingStartedCloseTap}>Close</button>
        <button onClick={gettingStartedProps.onGettingStartedHelpAudioTap}>Audio</button>
        <GettingStartedCardContents/>
    </div>)
});
