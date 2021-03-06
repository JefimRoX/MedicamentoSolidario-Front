
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Usuario } from '../models/usuario';
import { options } from '../app.module';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Accept:' text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
  })
};

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'https://medicamento-back.herokuapp.com';
    private currentUserSubject: BehaviorSubject<Usuario>;
    public currentUser: Observable<Usuario>;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('usuario')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Usuario {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
      return this.http.post<Usuario>(`${this.apiUrl}/login`, { cpf: username,senha: password },httpOptions)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('usuario', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('usuario');
        this.currentUserSubject.next(null);
    }
}
