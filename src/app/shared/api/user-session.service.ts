import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import jwt_decode from 'jwt-decode';


@Injectable({
    providedIn: 'root'
})
export class UserSessionService {

    public user$: BehaviorSubject<string> = new BehaviorSubject("");
    private user : any

    constructor() {
        const token = sessionStorage.getItem('token')

        if (token) {
            const data: any = jwt_decode(token);
            this.user$.next(data);
        }
    }

    getUsername() {
        return this.user$;
    }

    saveSession(token: any) {
        sessionStorage.setItem('token', token)
        const data: any = jwt_decode(token);
        this.user = data
        this.user$.next(data);
    }

    clearSession() {
        console.log(this.user)
        sessionStorage.clear()
        this.user$.next("")
    }

}