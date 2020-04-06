
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive ({
    // tslint:disable-next-line: directive-selector
    selector: '[numeric]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: OnlynumberDirective,
        multi: true
    }]
})



export class OnlynumberDirective  implements Validator {
    @Input () appConfirmEqualValidator: string;
    validate(control: AbstractControl): {[ key: string ]: any } | null {
      const  valueControl = control.value;


      if (valueControl.indexOf(0) === -1) {
        return { NotZero: true };
      }
      if (valueControl.length < 11) {
      return { minLength: true };
    }
      return null;

   }
}
