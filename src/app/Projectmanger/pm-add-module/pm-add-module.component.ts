import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-pm-add-module',
  templateUrl: './pm-add-module.component.html',
  styleUrls: ['./pm-add-module.component.css']
})
export class PmAddModuleComponent implements OnInit {

  constructor(private projectservice: ProjectService, private tsservice: ToastrService,private router:Router) { }
  moduleName: string = ""
  description: string = ""
  estimatedHour: string = ""
  projectId: string = ""
  priorityId: string = ""
  projects: Array<any> = []
  priority: Array<any> = []
  projectManagerId:string=""
  ngOnInit(): void {
    this.projectManagerId=localStorage.getItem("userId") as string
    
    this.projectservice.getpendingprojectforpm(this.projectManagerId).subscribe(resp=>{
    this.projects=resp.data
    })
    this.projectservice.getAllpriority().subscribe(resp=>{
      this.priority=resp.data
    })
  }
  addmodule() {
    let module = { moduleName: this.moduleName, description: this.description, estimatedHours: this.estimatedHour, priorityId: this.priorityId, projectId: this.projectId }
   
    
    this.projectservice.addmodule(module).subscribe(resp => {
      if(resp.status==200){
        this.tsservice.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("/projectmanager/pm-listModule")
      }else{
        this.tsservice.error("",resp.msg,{timeOut:3000})
      }
    })
  }

}
