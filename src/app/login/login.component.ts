import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email:String=""
  Password:String=""
  constructor(private sessionservice:SessionService,private tsService:ToastrService,private Router:Router) { }

  ngOnInit(): void {
  }

  login(){
    
    let user={email:this.Email,password:this.Password}
    this.sessionservice.login(user).subscribe(resp=>{
      
      
       if(resp.status==200){
        localStorage.setItem("userId", resp.data._id)
        localStorage.setItem("userName", resp.data.userName)
        localStorage.setItem("email", resp.data.email)
        console.log(resp.data.role);
        
        if(resp.data.role.roleName.toLowerCase()   =="admin"){
        this.tsService.success("",resp.msg,{timeOut:3000})
        this.Router.navigateByUrl("/admin")
        
       }else if(resp.data.role.roleName.toLowerCase()=="project manager"){
       this.tsService.success("",resp.msg,{timeOut:3000})
         this.Router.navigateByUrl("/projectmanager")
       }
      }
      else{
        this.tsService.error("","Invalid Email/password",{timeOut:3000})
        
      }
      
    })
  }

}
