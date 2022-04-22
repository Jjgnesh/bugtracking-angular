import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-pm-list-project',
  templateUrl: './pm-list-project.component.html',
  styleUrls: ['./pm-list-project.component.css']
})
export class PmListProjectComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectService, private tsservice: ToastrService) { }
  listProject: Array<any> = []
  projectManagerId: string = ""
  projectId:string=""
  status:string=""
  ngOnInit(): void {
    this.getprojectbymanager()
  }
  getprojectbymanager() {
    this.projectManagerId = localStorage.getItem("userId") as string
    this.projectService.getProjectbymanager(this.projectManagerId).subscribe(resp => {
      if (resp.status == -1) {
        this.tsservice.error(resp.msg, "", { timeOut: 3000 })
      } else {
        this.listProject = resp.data
        this.tsservice.success(resp.msg, "", { timeOut: 3000 })
      }
    })

  }
  deleteProject(projectId:any){
    this.projectService.deleteProject(projectId).subscribe(resp=>{
      if(resp.status==-1){
        this.tsservice.error(resp.msg,"",{timeOut:3000})
      }else{
        this.tsservice.success(resp.msg,"",{timeOut:3000})
        this.getprojectbymanager()
      }
    })
  }
 

}
