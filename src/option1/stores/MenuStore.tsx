import {IMenuProps} from "../ui-components/screens/MobileMenuScreen";
import {action, observable} from "mobx";

export class MenuStore implements IMenuProps {
    @observable
    isMenuOpen: boolean = false;
    @action
    onMenuCloseTap = () => {
        this.isMenuOpen = false;
    };
    @action
    onMenuContactUsTap = () => console.log('click');
    @action
    onMenuMyAccountTap = () => console.log('click');
    @action
    onMenuMyInterviewsTap = () => console.log('click');
    @action
    onMenuMyTagsTap = () => console.log('click');
    @action
    onMenuSignoutTap = () => console.log('click');
    @action
    onMenuStartNewInterviewTap = () => console.log('click');
}
