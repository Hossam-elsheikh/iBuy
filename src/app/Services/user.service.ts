import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, retry, throwError } from 'rxjs';
import { Iuser } from '../Models/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userLog: BehaviorSubject<boolean>;
  httpHeader: {};
  constructor(private httpClient: HttpClient) {
    this.userLog = new BehaviorSubject<boolean>(this.isLogged);
    this.httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  signup(user:Iuser):Observable<Iuser> {
    return this.httpClient.post<Iuser>(`${environment.BaseApiURL}/users`,JSON.stringify(user),this.httpHeader).pipe(
      retry(3),
      catchError((err)=>{
        return throwError(()=>{
          return new Error('Error while signing up')
        })
      })
    )

  }
  login(email: string, password: string) {
    let token = 'userToken';
    localStorage.setItem('userToken', token);

    this.userLog.next(true);
  }
  logout() {
    localStorage.removeItem('userToken');
    this.userLog.next(false);
  }
  get isLogged(): boolean {
    return localStorage.getItem('userToken') ? true : false;
  }

  getStatus(): Observable<boolean> {
    return this.userLog.asObservable();
  }
}
