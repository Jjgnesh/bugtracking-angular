import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-editmodule',
  templateUrl: './editmodule.component.html',
  styleUrls: ['./editmodule.component.css']
})
export class EditmoduleComponent implements OnInit {


  constructor(private projectService: ProjectService, private ActivatedRoute: ActivatedRoute,private tsservice:ToastrService,private router:Router) { }
  moduleId: string = ""
  moduleName: string = ""
  projectId: string = ""
  description: string = ""
  estimatedHour: string = ""
  priorityId: string = ""
  projectName:string=""
  priority: Array<any> = []
  projects: Array<any> = []
  modules: Array<any> = []
  ngOnInit(): void {
    this.projectService.getAllpriority().subscribe(resp => {
      this.priority = resp.data
    })
    this.projectService.getAllProject().subscribe(resp => {
      this.projects = resp.data
    })
    this.moduleId = this.ActivatedRoute.snapshot.params['moduleId']
    this.getModuleById()
  }
  getModuleById(){
      this.projectService.getmodulebyId(this.moduleId).subscribe(resp => { 
        this.moduleName = resp.data.moduleName
        this.moduleId = resp.data._id
         this.description = resp.data.description
        this.priorityId = resp.data.priorityId._id
        this.estimatedHour = resp.data.estimatedHour 
        this.projectId = resp.data.projectId._id
        this.projectName = resp.data.projectId.projectName
      
    })
  }
  updatemodule(){
    let module ={
      moduleName :this.moduleName,
      description:this.description,
      estimatedHours :this.estimatedHour,
      moduleId:this.moduleId,
      projectId:this.projectId,
      priorityId:this.priorityId
    }
    this.projectService.updatemodule(module).subscribe(resp=>{
      if(resp.status==200){
        this.tsservice.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("/admin/listmodule")
      }else{
        this.tsservice.error("",resp.msg,{timeOut:3000})
      }
    })
  }
}
