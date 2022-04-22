
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private router:Router ,private sessionservice:SessionService,private tsservice:ToastrService) { }
  email:string=""

  ngOnInit(): void {
  }
  sendOtpForPassword(){
    let user= {email:this.email}
    //console.log(user);
    
    this.sessionservice.sendOtpForPassword(user).subscribe(resp=>{
      if(resp.status==-1){
        this.tsservice.error("",resp.msg,{timeOut:3000})
      }else{
        this.tsservice.success("",resp.msg,{timeOut:3000})
        localStorage.setItem("email",this.email)
        this.router.navigateByUrl("/changepassword")
      }
    })
  }

}
