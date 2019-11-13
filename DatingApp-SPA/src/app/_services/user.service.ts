import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

const httpOptions = {
  headers: new HttpHeaders({
    Autorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get users from the API
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users', httpOptions);
  }

  // Get specific user from API
  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id, httpOptions);
  }
}
