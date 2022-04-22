import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private projectService:ProjectService,private tsSevice:ToastrService,private router:Router) { }
  projectId:string=""
  priorityId:string=""
  project:Array<any>=[]
  priority:Array<any>=[]
  taskName:string=""
  description:string=""
  moduleId:string=""
  module:Array<any>=[]
  estimatedHour:string=""


  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp=>{
      this.project=resp.data
    })
    this.projectService.getAllpriority().subscribe(resp=>{
      this.priority=resp.data
    })
    
  }

  moduleByProject(){
    this.projectService.getmodulebyproject(this.projectId).subscribe(resp=>{
      if(resp.status==200){
        this.tsSevice.success("",resp.msg,{timeOut:3000})
        this.module=resp.data
      }else{
        this.tsSevice.error("",resp.msg,{timeOut:3000})
      }
    })
 }
 addtask(){
   let task ={
    projectId:this.projectId,
    moduleId:this.moduleId,
    taskName:this.taskName,
    description :this.description,
    totalTime:this.estimatedHour,
    priorityId:this.priorityId
   }
   this.projectService.addtask(task).subscribe(resp=>{
     if(resp.status==200){
       this.tsSevice.success("",resp.msg,{timeOut:3000})
       this.router.navigateByUrl("/admin/listtask")
     }else{
       this.tsSevice.error("",resp.msg,{timeOut:3000})
     }
   })
 }
}
