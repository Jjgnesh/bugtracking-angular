import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-pm-add-user',
  templateUrl: './pm-add-user.component.html',
  styleUrls: ['./pm-add-user.component.css']
})
export class PmAddUserComponent implements OnInit {

  constructor(private sessionService:SessionService,private tsService:ToastrService,private  Router:Router) { }
  FirstName:string=""
  Email:string=""
  gender:string=""
  role:string=""
  Password:string=""
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
        // this.Router.navigateByUrl("")
      }
      
    })
  }
}
