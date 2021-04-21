import { HttpErrorResponse } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { throwError } from 'rxjs';

declare let showFeedback: any;

export class BaseService {

    constructor() { }

    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            if (isDevMode()) {
                console.error(error.error.message);
            }
        } else {
            if (isDevMode()) {
                console.error(`${error.status} - ${error.error.menssage}`);
            }

            if (error.status == 401) {
                localStorage.removeItem;
                showFeedback('Some error occured!');
                return throwError(error);
            }
        }

        return throwError(error);
    }
}
