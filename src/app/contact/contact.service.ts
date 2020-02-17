import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NgForm } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ContactService {
    constructor (private http: HttpClient) {}

    contactText(name: string, email: string, text: string) {
        return this.http.put('https://cfi-group-angular.firebaseio.com/contact-text.json', 
        {
            name: name,
            email: email,
            text: text
        }
        )
    }

    presentationText(name: string, email: string, text: string) {
        return this.http.put('https://cfi-group-angular.firebaseio.com/pretenzia-text.json', 
        {
            name: name,
            email: email,
            text: text
        }
        )
    }

}