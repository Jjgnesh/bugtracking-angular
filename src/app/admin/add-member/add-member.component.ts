import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(private projectService:ProjectService,private ActiveRoute:ActivatedRoute,private tsService:ToastrService,private Router:Router,private RoleService:RoleserviceService) { }
  projectId: string = ""
  projectName: string =""  
  projectManager: Array<any> = []
  developer: Array<any> = []
  tester: Array<any> = []
  role: Array<any> = []

  managers: Array<any> = []
  developers: Array<any> = []
  testers: Array<any> = []

  ngOnInit(): void {
    this.projectId = this.ActiveRoute.snapshot.params['projectId']
    this.projectService.getProjectName(this.projectId).subscribe(resp => {
      console.log(resp);
      this.projectName = resp.data[0].projectName
      
      
    })
    this.RoleService.getAllDeveloper().subscribe(resp => {
      this.developers = resp.data
    })
    this.RoleService.getAllMangers().subscribe(resp => {
      this.managers = resp.data
    })
    this.RoleService.getAllTester().subscribe(resp => {
      this.testers = resp.data
    })
  }
  addProjectTeam() {
  
    
    for (let i = 0; i < this.developer.length; i++) {
      this.projectService.addProjectTeam({ projectId: this.projectId, projectTeamMember: this.developer[i], role: "6242af4d3329d01fcef3ba82" }).subscribe()
    }
    for (let i = 0; i < this.projectManager.length; i++){
      this.projectService.addProjectTeam({ projectId: this.projectId, projectTeamMember: this.projectManager[i], role: "624a87f3094d03c760cc8628" }).subscribe()
    }

    for (let i = 0; i < this.tester.length; i++) {
      this.projectService.addProjectTeam({ projectId: this.projectId, projectTeamMember: this.tester[i], role: "62301c00e893ddb39f6e522d" }).subscribe()
    }
    this.Router.navigateByUrl("/admin/listProjectTeam")
  }
}
