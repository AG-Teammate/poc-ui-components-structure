import {observer} from "mobx-react";
import React from "react";
import {Card} from "./CardBase";

export interface IGettingStartedCardProps {
    onLearnMoreTap: () => void
}

export const GettingStartedCard: React.FC<{ gettingStartedCardProps: IGettingStartedCardProps }>
    = observer(function GettingStartedCard({gettingStartedCardProps}) {
    return (
        <Card title={"Getting started"}>Complete -> Review -> Practice<br/>
            <button onClick={gettingStartedCardProps.onLearnMoreTap}>Learn more</button>
        </Card>
    )
});
