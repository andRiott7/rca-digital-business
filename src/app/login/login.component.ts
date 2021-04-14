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
