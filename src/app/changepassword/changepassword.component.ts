import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  otp:string=""
  pass:string=""
  cpass:string=""
  constructor(private sessionservice:SessionService,private toaster:ToastrService,private router:Router) { }
  email:string=""
  ngOnInit(): void {
    this.email=localStorage.getItem("email") as string
    console.log(this.email);
    
  }

  changepassword(){
    let user={email:this.email,otp:this.otp,pass:this.pass,cpass:this.cpass}
    this.sessionservice.otpverification(user).subscribe(resp=>{
      if(resp.status==-1){
        this.toaster.error("",resp.msg,{timeOut:3000})
      }else{
        this.toaster.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("/login")
      }
      
    })
  }

}
