import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, timestamp, catchError, first } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })

export class AuthService {

    constructor(private http: HttpClient) {

    }

}
