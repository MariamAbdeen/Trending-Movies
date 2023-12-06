import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService: AuthService, private _Router:Router) {

  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9]{5}$/)]),
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, { validators: this.rePassword })


  rePassword(registerForm: any) {
    let passwordControl = registerForm.get('password')
    let rePasswordControl = registerForm.get('rePassword')
    if (passwordControl.value === rePasswordControl.value) {
      return null
    }
    else {
      rePasswordControl.setErrors({ rePasswordMatch: 'password dont match' })
      return { rePasswordMatch: 'password dont match' }
    }
  }
islodding:boolean = false;
apiError:string = ''
  submitRegister(registerForm: FormGroup) {
    if (registerForm.valid) {
      this.islodding=true
      this._AuthService.register(registerForm.value).subscribe({
        next: (response) => {
          this.islodding =false
          if (response.message === 'success') {
            this._Router.navigate(['/login'])
          }
        }
        ,
        error: (err)=> {
          this.islodding=false,
          this.apiError=err.error.message
        }
        
        
      })
    }
  }
}


