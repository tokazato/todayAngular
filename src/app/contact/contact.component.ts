import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ContactService } from './contact.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isContact = true;
  isValid = false;
  constructor(
    private contacServ: ContactService,
    private authServ: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  contc() {
    this.isContact = true;
  }
  presebt() {
    this.isContact = false;
  }
  onSubmit(form: NgForm) {
    if(!form.valid) {return}

    this.authServ.user.subscribe(userInfo => {
      if(!userInfo){
        alert('შეტყობინების გასაგზავნად გთხოვთ გაიაროთ ვერიფიკაცია')
        this.router.navigate(['/auth'])
      }
    })

    let name = form.value.name;
    let email = form.value.email;
    let text = form.value.text;

    if (this.isContact) {
      this.contacServ.contactText(name, email, text).subscribe(respo => {
        console.log(respo)
        alert('Success')
      })
    } else {
      this.contacServ.presentationText(name, email, text).subscribe(respo => {
        console.log(respo)
      })
    }
  }




}
