import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/v1/users';

  private httpOptions: any;
  private loggedInUser: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user, this.httpOptions);
  }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };

    return this.http.post(`${this.apiUrl}/login`, loginData, this.httpOptions).pipe(
      tap((response: any) => {
        const token = response.token;
        this.setAuthorizationHeader(token);  // Establecer el token en los encabezados
      })
    );
  }

  setAuthorizationHeader(token: string): void {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
  }
}
