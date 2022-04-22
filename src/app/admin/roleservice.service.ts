import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {

  constructor(private HttpClient:HttpClient) { }
  addrole(role:any):Observable<any>{
    return this.HttpClient.post("http://localhost:3000/roles",role)
  }

  listrole():Observable<any>{
    return this.HttpClient.get("http://localhost:3000/roles")
  }

  deleterole(roleId:any):Observable<any>{
    return this.HttpClient.delete("http://localhost:3000/roles/"+roleId)
  }
  updaterole(role:any):Observable<any>{
    return this.HttpClient.put("http://localhost:3000/roles",role)
  }
  getrolesbyId(roleId:any):Observable<any>{
    return this.HttpClient.get("http://localhost:3000/role/"+roleId)
  }
  getAllManger():Observable<any>{
    return this.HttpClient.get("http://localhost:3000/Manager")
  }
  getAllDeveloper():Observable<any>{
    return this.HttpClient.get("http://localhost:3000/developer")
  }
  getAllTester():Observable<any>{
    return this.HttpClient.get("http://localhost:3000/tester")
  }
  getAllMangers():Observable<any>{
    return this.HttpClient.get("http://localhost:3000/Managers")
}
getUserById(userId:any):Observable<any>{
  return  this.HttpClient.get("http://localhost:3000/userByuserId/"+userId)
}
getUserByRole(user:any):Observable<any>{
  return this.HttpClient.get("http://localhost:3000/getUserByRole/"+user)
}
getAllStatus():Observable<any>{
  return this.HttpClient.get("http://localhost:3000/status")
}
}