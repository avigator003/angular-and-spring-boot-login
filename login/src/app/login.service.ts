import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url:string;
  result:Observable<user>;
  constructor(private http:HttpClient) {
    this._url="http://localhost:8084/login"
   }
public login(username:string,password:string):Observable<user>
{
  
    this.result= this.http.post<user>(this._url,{username,password});
    
    return this.result;

}


}
