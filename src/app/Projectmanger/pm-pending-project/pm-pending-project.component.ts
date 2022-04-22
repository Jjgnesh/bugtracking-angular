import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-pm-pending-project',
  templateUrl: './pm-pending-project.component.html',
  styleUrls: ['./pm-pending-project.component.css']
})
export class PmPendingProjectComponent implements OnInit {

  constructor(private projectService:ProjectService,private toaster:ToastrService,private router:Router) { }
  Project :Array<any>=[]
  managerId:string=""
  ngOnInit(): void {
  this.pendingProjectforPm()
  }
  pendingProjectforPm(){
    this.managerId=localStorage.getItem("userId")as string
    this.projectService.pendingProjectforPm(this.managerId).subscribe(resp=>{
      if(resp.status==200){
        this.toaster.success("",resp.msg,{timeOut:3000})
        this.Project=resp.data
      
      }else{
        this.toaster.error("",resp.msg,{timeOut:3000})
      }
    })
  }
  upadateprojectStatus(projectId:any){
    console.log(projectId);
  
  

    
    this.projectService.upadateprojectStatus(projectId).subscribe(resp=>{
      if(resp.status==-1){
        this.toaster.error(resp.msg,"",{timeOut:3000})
      }else{
        this.toaster.success(resp.msg,"",{timeOut:3000})
        this.router.navigateByUrl("/projectmanager/pm-complatedProject")
      
      }
    })
    
  }
}
