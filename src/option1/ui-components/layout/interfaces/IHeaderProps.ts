import {IMenuProps} from "../../screens/MobileMenuScreen";

export interface IAuthorizedUserProps {
    userFirstName: string | null
}

export interface IHeaderProps {
    //user info for desktop profile dropdown
    userInfo?: IAuthorizedUserProps | null | undefined
    //left buttons
    onMenuCloseClick?: () => void | undefined //X icon or profile collapse
    onMenuButtonClick?: () => void | undefined //burger or profile click
    //todo back (2 variants - one on auth screens and another in app)
    //todo TBD should we use the same onMenuCloseClick for e.g. closing an interview or a separate prop?

    //todo right buttons (Save, Add, +, Done, etc, etc.)

    //desktop-specific
    //this should be set by UI components, not logic layer I think
    backButtonText?: string| undefined
    //todo interview info (date, tags, etc). Probably may want to pass the whole Interview object here

    //text
    text?: string | null | undefined
    textVariant?: "regular" | "blue" | "bigBlue" | undefined //todo TBD do we need more variants on desktop than on mobile?

    //menu. this is duplicated in header and some screens
    menuProps?: IMenuProps | undefined
}
