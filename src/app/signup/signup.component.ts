import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  FirstName:String=""
  Email:String=""
  Password:String=""
  gender:string=""
  role:string=""
  constructor(private sessionService:SessionService, private tsService:ToastrService,private Router:Router) { }
  ngOnInit(): void {
  }
  saveUser(){
    let user = {userName:this.FirstName,email:this.Email,password:this.Password,Gender:this.gender,role:this.role}
    this.sessionService.saveUser(user).subscribe(resp=>{
      if(resp.status==-1){
      this.tsService.error("",resp.msg,{timeOut:3000})
      console.log(resp);
      }
      else{
        this.tsService.success("",resp.msg,{timeOut:3000})
        this.Router.navigateByUrl("/login")
      }
      
    })
    //console.log(this.FirstName,this.Email,this.Password)
  }
}
