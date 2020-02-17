import { FormGroup, FormControl, ValidatorFn, Validators, AbstractControl } from '@angular/forms';

export function checkid (form: FormGroup) {
    const id = form.get('id');
    

   //   if(!id.value) {
   //      return { 
   //         idErrors: ["შეიყვანე ID"]
   //       };
   //   } else if (id.value.length !== 11) {
   //      return { 
   //         idErrors: ['ID უნდა იყოს 11 ნიშნა'] 
   //       };
   //   }
}


/** A hero's name can't match the given regular expression */

export function forbiddenNameValidator(nameRe): ValidatorFn {
   return (control) => {
     const forbidden = nameRe.value.length;
     return forbidden !== 11 ? {'forbiddenName': {value: control.value}} : null;
  };
}

export function testia(param) {
  const surname = param.get('surname');
  return surname.value !== 'zato' ? {'err': 'eroria'} : null ;
}

// export const testi: ValidatorFn = (form: FormGroup) => {
//     const id = form.get('id');
//     if(id && id.value.length !== 11) {
//         return  {idError: 'chawere 11 ricxvi'}
//     }
//     return id
// }