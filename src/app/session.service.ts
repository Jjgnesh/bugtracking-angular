import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private HttpClient:HttpClient) { }
  
  saveUser(user:any):Observable<any>{
    return this.HttpClient.post("http://localhost:3000/users",user)
  }

  authentication(user:any):Observable<any>{
    return this.HttpClient.get("http://localhost:3000/users",user)
  }

  login(user:any):Observable<any>{
    return this.HttpClient.post("http://localhost:3000/login",user)
  }
  sendOtpForPassword(user:any):Observable<any>{
    return this.HttpClient.post("http://localhost:3000/sendOtp",user)
  }

  otpverification(user:any):Observable<any>{
    return this.HttpClient.put("http://localhost:3000/otpverification",user)
  }
  
}



