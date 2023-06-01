import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { environment } from "src/environments/environment";

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const copiedReq = req.clone({
      headers: req.headers.set("Authorization", environment.requestToken),
    });

    return next.handle(copiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = "";
        if (error.error instanceof ErrorEvent) {
          console.log("This is client side error");
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log("This is server side error");
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.log(errorMsg);

        return throwError(error);
      })
    );
  }
}
