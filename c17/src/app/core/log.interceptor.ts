import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const startTime = Date.now();

        return next.handle(req).pipe(
            tap(() => {
                const endTime = Date.now();
                const duration = endTime - startTime;
                console.log(
                    `Request to ${req.url} took ${duration} milliseconds.`
                );
            })
        );
    }
}