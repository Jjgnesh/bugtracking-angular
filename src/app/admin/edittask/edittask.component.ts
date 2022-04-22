import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  constructor(private projectSerivce:ProjectService,private tsservice:ToastrService,private activatedRoute:ActivatedRoute,private router:Router) { }
  projectName:string=""
  project:Array<any>=[]
  moduleName:string=""
  module:Array<any>=[]
  priorityId:string=""
  priority:Array<any>=[]
  taskId:string=""
  taskName:string=""
  description:string=""
  estimatedHour:string=""
  


  ngOnInit(): void {
    this.projectSerivce.getAllProject().subscribe(resp=>{
      this.project=resp.data
    })
    this.projectSerivce.getAllpriority().subscribe(resp=>{
      this.priority=resp.data
    })
    this.projectSerivce.listmodule().subscribe(resp=>{
      this.module=resp.data
    })
    this.taskId=this.activatedRoute.snapshot.params['taskId']
    //console.log(this.taskId);
    
    this.getTaskbyId()
  }
  getTaskbyId(){
    //console.log(this.taskId);
    
    this.projectSerivce.gettaskbyId(this.taskId).subscribe(resp=>{
      this.taskName=resp.data.taskName
      this.projectName=resp.data.projectId.projectName
      this.priorityId=resp.data.priorityId.priorityName
      this.moduleName=resp.data.moduleId.moduleName
      this.description=resp.data.description
      this.estimatedHour=resp.data.totalTime
   })
  }
  updatetask(){
    let task={
      taskId:this.taskId,
      taskName:this.taskName,
      description:this.description,
      totalTime:this.estimatedHour,
      priorityId:this.priorityId
    }
    this.projectSerivce.updatetask(task).subscribe(resp=>{
      if(resp.status==200){
        this.tsservice.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("/admin/listtask")
      }else{
        this.tsservice.error("",resp.msg,{timeOut:3000})
      }
    })
  }
  
}
