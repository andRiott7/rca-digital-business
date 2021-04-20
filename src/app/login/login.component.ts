import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'rca-login-form',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // loginForm: FormGroup = this.fb.group({
    //     'email': ['', [Validators.required, Validators.email]],
    //     'password': ['', [Validators.required, Validators.minLength(6)]],
    // })

    loading = false;

    constructor(
        // private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    onSubmit() {

    }

}

// import { LocalStorageService } from './local-storage.service';
// @Component({
//     selector: 'rca-login-form',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.scss']
// })

// export class LoginComponent{
//     title = 'local-storage';
//     constructor(private localStorageService: LocalStorageService) { }

//     public email: string = '';
//     public password: string = '';

//     public queryKey: string;
//     public removeKey: string;

//     public queryResult: string;

//     public person = { email: this.email, password: this.password }
//     public addPerson() {
//         this.person.email = this.email
//         this.person.password = this.password;
//         this.localStorageService.setItem(this.email, JSON.stringify(this.person))
//     }
//     public getPerson(nameToRemove: string) {
//         this.queryResult = this.localStorageService.getItem(nameToRemove);
//     }
//     public deletePerson(nameToDelete: string) {
//         this.localStorageService.removeItem(nameToDelete);
//     }
//     public reset() {
//         this.localStorageService.clear();
//     }
// }
