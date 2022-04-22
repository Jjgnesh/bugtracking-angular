import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-addproject-team',
  templateUrl: './addproject-team.component.html',
  styleUrls: ['./addproject-team.component.css']
})
export class AddprojectTeamComponent implements OnInit {

  constructor(private projectService: ProjectService, private tsService: ToastrService, private ActiveRoute: ActivatedRoute, private Router: Router, private RoleService: RoleserviceService) { }
  projectId: string = ""
  project: Array<any> = []
  projectManager: Array<any> = []
  developer: Array<any> = []
  tester: Array<any> = []
  role: Array<any> = []

  managers: Array<any> = []
  developers: Array<any> = []
  testers: Array<any> = []
  ngOnInit(): void {
    this.projectId = this.ActiveRoute.snapshot.params['projectId']
    this.projectService.getAllProject().subscribe(resp => {
      this.project = resp.data
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
    console.log(this.developer);
    
    for (let i = 0; i < this.developer.length; i++) {
      this.projectService.addProjectTeam({ projectId: this.projectId, projectTeamMember: this.developer[i], role: "6242af4d3329d01fcef3ba82" }).subscribe()
    }
    for (let i = 0; i < this.projectManager.length; i++){
      this.projectService.addProjectTeam({ projectId: this.projectId, projectTeamMember: this.projectManager[i], role: "624a87f3094d03c760cc8628" }).subscribe()
    }

    for (let i = 0; i < this.tester.length; i++) {
      this.projectService.addProjectTeam({ projectId: this.projectId, projectTeamMember: this.tester[i], role: "62301c00e893ddb39f6e522d" }).subscribe()
    }

  }
}
