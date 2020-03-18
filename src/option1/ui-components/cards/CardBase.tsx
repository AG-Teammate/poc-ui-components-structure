import {observer} from "mobx-react";
import React from "react";

interface ICardProps {
    title: string
}

export const Card: React.FC<ICardProps> = observer(function Card({title, children}) {
    return <div>
        <h1>{title}</h1>
        {children}
    </div>
});
