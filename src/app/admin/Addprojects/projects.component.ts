import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectName : String=""
  projectManager:string=""
  description:string=""
  projectTechnology:string=""
  estimatedHour:string=""
  managers :Array<any>=[]
  

  constructor(private projectService:ProjectService,private tsService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.projectService.getAllmanager().subscribe(resp=>{
      this.managers=resp.data
    })
  }
  addProject(){
    let project ={projectName:this.projectName,description:this.description,projectManagerId:this.projectManager,technology:this.projectTechnology,estimatedHour:this.estimatedHour}
    this.projectService.addproject(project).subscribe(resp=>{
      if(resp.status==-1){
        this.tsService.error(resp.msg,"",{timeOut:3000})
      }else{
        this.tsService.success(resp.msg,"",{timeOut:3000})
        this.router.navigateByUrl("/admin/listProject")
      }
    })
  }

}
