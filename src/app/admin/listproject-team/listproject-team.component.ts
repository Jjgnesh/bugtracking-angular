import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-listproject-team',
  templateUrl: './listproject-team.component.html',
  styleUrls: ['./listproject-team.component.css']
})
export class ListprojectTeamComponent implements OnInit {

  constructor(private projectService: ProjectService, private tsservice: ToastrService,private router:Router) { }
  projectId: string = ""
  project: Array<any> = []
  projectTeam: Array<any> = []

  ngOnInit(): void {

    this.projectService.getAllProject().subscribe(resp => {
      this.project = resp.data
    })
  }
  
  
  getProjectTeambyID() {
    this.projectService.getProjectTeambyID(this.projectId).subscribe(resp => {
      this.projectTeam = resp.data
    })
  }
  disableUserForProject(userId:any){
    this.projectService.disableUserForProject(userId).subscribe(resp=>{
      this.getProjectTeambyID()
    })
  }
  addProjectMember(){
    if(this.projectId==""){
      this.tsservice.error("","Please choose project",{timeOut:3000})
    }else{
      this.router.navigateByUrl("/admin/addMember/"+this.projectId)
    }
  }
  assingTask(user:any){
    localStorage.setItem("projectId",this.projectId)
    if(user.role=="6242af4d3329d01fcef3ba82"){

    this.router.navigateByUrl("/admin/assignTask/"+user._id)
    }else if (user.role=="624a87f3094d03c760cc8628"){
      this.router.navigateByUrl("/admin/assignModule/"+user._id)
    }
  }
}