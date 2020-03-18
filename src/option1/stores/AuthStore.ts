import {observable} from "mobx";

export class AuthStore {
    @observable
    userFirstName: string | null = "Andrew"; //just for demo purposes
}
