import { AbstractControl } from "@angular/forms";

export class PasswordValidator {
    static validateOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if(control.value !== '12345')
                resolve ({ invalidOldPassword : true});
            else
                resolve(null);
        })

    }

    static passwordShouldMatch(control: AbstractControl) {
        let newPass : any = control.get('newPassword');
        let confPass: any = control.get('confirmPassword');

        if(newPass.value !== confPass.value)
            return { passwordShouldMatch: true };
        
        return null;
    }
}