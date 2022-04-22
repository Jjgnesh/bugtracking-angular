import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-pending-approvel',
  templateUrl: './pending-approvel.component.html',
  styleUrls: ['./pending-approvel.component.css']
})
export class PendingApprovelComponent implements OnInit {

  constructor(private projectservice:ProjectService,private tsService:ToastrService,private router:Router) { }
  pendingUser:Array<any>=[]
  ngOnInit(): void {
    this.pendingApprovel()
  }
  pendingApprovel(){
    this.projectservice.pendingAppprovel().subscribe(resp=>{
      console.log(resp);
      
      if(resp.status==200){
        this.tsService.success("",resp.msg,{timeOut:3000})
        this.pendingUser=resp.data
      }else{
        this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
  }
  approveUser(userId:any){
    let user= {userId:userId}
    this.projectservice.approveduser(user).subscribe(resp=>{
      if(resp.status==200){
        this.tsService.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("/admin/listuser")
      }else{
        this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
  }
  deletuser(userId:any){
    //console.log(userId);
    
  this.projectservice.deleteuser(userId).subscribe(resp=>{
    if(resp.status==200){
      this.tsService.success("",resp.msg,{timeOut:3000})
      this.pendingApprovel()
    }else{
      this.tsService.error("",resp.msg,{timeOut:3000})
    }
  })
  }
}
