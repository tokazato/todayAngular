import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { GetLoanService } from '../get-loan.service';
import { testia, forbiddenNameValidator } from '../get-loan.validator';
import { ValueTransformer } from '@angular/compiler/src/util';


@Component({
  selector: 'app-auto-loan',
  templateUrl: './auto-loan.component.html',
  styleUrls: ['./auto-loan.component.scss']
})
export class AutoLoanComponent implements OnInit {
  autoForm: FormGroup;
  formErrorMessage = [];
  currenc = ['GEL', 'EUR', 'USD']
  selected = 'GEL';
  constructor( private loanserv: GetLoanService) { }

  ngOnInit() {
    this.autoForm = new FormGroup(
    {
      'name': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z]+'), forbiddenNameValidator(/bob/i)]),
      'surname': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-z]+')]),
      'id': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{11}')]),
      'tel': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{9}')]),
      'ownerName': new FormControl(null, [Validators.required]),
      'ownerSurname': new FormControl(null, [Validators.required]),
      'ownerId': new FormControl(null, [Validators.required]),
      'ownerAddress': new FormControl(null, [Validators.required]),
      'getMoney': new FormControl(null, [Validators.required]),
      'sacCode': new FormControl(null, [Validators.required]),
      'currenc': new FormControl(),
    },
    {
      validators: [testia]
    }
    )
    console.log(this.selected)
  }


  select(item) {
      this.selected = item;
  };
  isActive(item) {
      return this.selected === item;
  };


  onSubmit(form: FormGroup) {

    this.autoForm.get('currenc').setValue(this.selected)

    const fillForm = form.value;
    console.log(fillForm)
    this.loanserv.sendForm(fillForm).subscribe(par => {
      console.log(par)
    })
    form.reset()

    this.formErrorMessage = this.autoForm.errors && this.autoForm.errors.idErrors ? this.autoForm.errors.idErrors : [];

  }

  fetchForm() {

    this.loanserv.fetch().subscribe(ravi  => {
      console.log( typeof ravi)
      this.testFun(ravi)
    })
    
  }


  private testFun(para) {

    let name = para.name;
    let surname = para.surname;
    let id = para.id;
    let tel = para.tel;
    let ownerName = para.ownerName;
    let ownerSurname = para.ownerSurname;
    let ownerId = para.ownerId;
    let ownerAddress = para.ownerAddress;
    let sacCode = para.sacCode;
    let getMoney = para.getMoney;
    let currenc = para.currenc;

    this.autoForm.get('name').setValue(name);
    this.autoForm.get('surname').setValue(surname);
    this.autoForm.get('id').setValue(id);
    this.autoForm.get('tel').setValue(tel);
    this.autoForm.get('ownerName').setValue(ownerName);
    this.autoForm.get('ownerSurname').setValue(ownerSurname);
    this.autoForm.get('ownerId').setValue(ownerId);
    this.autoForm.get('ownerAddress').setValue(ownerAddress);
    this.autoForm.get('sacCode').setValue(sacCode);
    this.autoForm.get('getMoney').setValue(getMoney);
    this.autoForm.get('currenc').setValue(currenc);

    this.select(currenc);
    

}

  
 
 

}





