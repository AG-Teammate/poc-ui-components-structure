import React from "react";
import {observer} from "mobx-react";
import {Card} from "./CardBase";
import {Case, Default, Switch} from "../util/Switch";

export interface IPracticeCardProps {
    //if no last interview date then https://www.figma.com/file/WVhPobnY7BFoYm1btfyjQl/App-Refined?node-id=4%3A699 else https://www.figma.com/file/WVhPobnY7BFoYm1btfyjQl/App-Refined?node-id=4%3A756
    lastInterviewDate: Date | null
    onStartNewInterviewTap: () => void //Tap: Start an interview / Start new interview
    onViewLastInterviewTap: () => void //Tap: View last interview
}

export const PracticeCard: React.FC<{ practiceCardProps: IPracticeCardProps }> = observer(function PracticeCard({practiceCardProps}) {
    return (
        <Card title={"Practice"}>
            <Switch>
                <Case if={practiceCardProps.lastInterviewDate === null}>
                    Practice soft skills...<br/>
                    <button onClick={practiceCardProps.onStartNewInterviewTap}>Start an interview</button>
                </Case>
                <Default>
                    Your last interview
                    ... {practiceCardProps.lastInterviewDate?.toLocaleTimeString() /*format via momentjs?*/}<br/>
                    <button onClick={practiceCardProps.onViewLastInterviewTap}>View last interview</button>
                    <br/>
                    <button onClick={practiceCardProps.onStartNewInterviewTap}>Start new interview</button>
                </Default>
            </Switch>
        </Card>
    )
});
