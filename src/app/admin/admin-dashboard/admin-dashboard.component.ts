import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private projectService:ProjectService,private roleservice:RoleserviceService) { }
project:string=""
user:string=""
pendinguser:string=""
module:string=""
task:string=""
pendingProject:string=""
complateProject:string=""
ngOnInit(): void {
this.projectService.getAllProject().subscribe(resp=>{
  this.project=resp.data.length
})
this.projectService.getAlluser().subscribe(resp=>{
  this.user=resp.data.length
})
this.projectService.pendingAppprovel().subscribe(resp=>{
this.pendinguser=resp.data.length
})
this.projectService.listmodule().subscribe(resp=>{
  this.module=resp.data.length
})
this.projectService.listtask().subscribe(resp=>{
  this.task=resp.data.length
})
this.projectService.pendingProject().subscribe(resp=>{
  this.pendingProject=resp.data.length
})
this.projectService.complatedProject().subscribe(resp=>{
  this.complateProject=resp.data.length
})
  }

}
