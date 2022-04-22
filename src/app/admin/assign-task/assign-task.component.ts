import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  constructor(private projectService: ProjectService, private tsService: ToastrService
    , private ActiveRoute: ActivatedRoute, private Router: Router,private roleServie:RoleserviceService) { }
    userId:string=""
    user:string=""
    projectId:string=""
    projectName:string=""
    module:Array<any>=[]
    moduleId:string=""
    task:Array<any>=[]
    taskId:string=""

  ngOnInit(): void {
  
    this.userId=this.ActiveRoute.snapshot.params["user"]
    

    this.roleServie.getUserById(this.userId).subscribe(resp=>{
      this.user=resp.data.userName
    })
    this.projectId=localStorage.getItem("projectId")as string
    this.projectService.getProjectName(this.projectId).subscribe(resp=>{
      
      
      this.projectName=resp.data[0].projectName
    })
    this.projectService.getmodulebyproject(this.projectId).subscribe(resp=>{
      
      
      this.module=resp.data
    })  
    
  
  }
getTaskbyModule(){
  // console.log(this.moduleId);
  this.projectService.getTaskByModule(this.moduleId).subscribe(resp=>{
    this.task=resp.dataS
  })
}
assginTask(){
  let task={taskId:this.taskId,projectId:this.projectId,moduleId:this.moduleId,taskUser:this.userId}
  this.projectService.assignTask(task).subscribe(resp=>{  
    if(resp.status==200){
      this.tsService.success("",resp.msg,{timeOut:3000})
      this.Router.navigateByUrl("/admin/listProjectTeam")
    }else{
      this.tsService.error("",resp.msg,{timeOut:3000})
    }
  })
}

}
