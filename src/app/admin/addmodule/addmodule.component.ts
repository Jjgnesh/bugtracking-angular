import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.css']
})
export class AddmoduleComponent implements OnInit {
  moduleName: string = ""
  description: string = ""
  estimatedHour: string = ""
  projectId: string = ""
  priorityId: string = ""
  projects: Array<any> = []
  priority: Array<any> = []


  constructor(private projectservice: ProjectService, private tsservice: ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.projectservice.getAllProject().subscribe(resp => {
      this.projects = resp.data

    })
    this.projectservice.getAllpriority().subscribe(resp => {
      this.priority = resp.data
 
    })
  }
  addmodule() {
    let module = { moduleName: this.moduleName, description: this.description, estimatedHours: this.estimatedHour, priorityId: this.priorityId, projectId: this.projectId }
   
    
    this.projectservice.addmodule(module).subscribe(resp => {
      if(resp.status==200){
        this.tsservice.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("admin/listmodule")
      }else{
        this.tsservice.error("",resp.msg,{timeOut:3000})
      }
    })
  }

}
