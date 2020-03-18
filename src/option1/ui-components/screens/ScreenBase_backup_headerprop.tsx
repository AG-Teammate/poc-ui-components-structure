//screen is just a simple wrapper for demo purposes
import React from "react";
import {IAuthorizedUserProps, IHeaderProps} from "../layout/interfaces/IHeaderProps";

export interface IScreenProps {
    header: React.ReactElement<IHeaderProps> | null
    userInfo?: IAuthorizedUserProps | null | undefined
}

//todo discuss if we need a header as prop or can just pass headerProps
export const Screen: React.FC<IScreenProps> = ({children, header}) =>
    <main>
        {header}
        <div>{children}</div>
    </main>;
