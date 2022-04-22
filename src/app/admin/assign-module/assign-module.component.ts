import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-assign-module',
  templateUrl: './assign-module.component.html',
  styleUrls: ['./assign-module.component.css']
})
export class AssignModuleComponent implements OnInit {

  constructor(private projectService: ProjectService, private tsService: ToastrService
    , private ActiveRoute: ActivatedRoute, private Router: Router, private roleServie: RoleserviceService) { }

  userId: string = ""
  user: string = ""
  projectId: string = ""
  project: Array<any> = []
  module: Array<any> = []
  moduleId: string = ""
  ngOnInit(): void {
    this.userId = this.ActiveRoute.snapshot.params["user"]

    this.projectId = localStorage.getItem("projectId") as string

    this.projectService.getProjectName(this.projectId).subscribe(resp => {
      this.project = resp.data[0].projectName
    })
    this.roleServie.getUserById(this.userId).subscribe(resp => {
      this.user = resp.data.userName
    })
    this.projectService.getmodulebyproject(this.projectId).subscribe(resp => {
      this.module = resp.data
    })
  }
  assignModule() {
    let modules = { moduleId: this.moduleId, moduleUser: this.userId }
    this.projectService.assignModule(modules).subscribe(resp => {
      console.log(modules);

      if (resp.status == 200) {
        this.tsService.success("", resp.msg, { timeOut: 3000 })
        this.Router.navigateByUrl("/admin/listProjectTeam")
      } else {
        this.tsService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }
}
