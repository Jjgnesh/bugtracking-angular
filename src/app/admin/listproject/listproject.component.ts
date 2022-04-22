import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css']
})
export class ListprojectComponent implements OnInit {

  constructor(private router:Router,  private projectService:ProjectService,private tsservice:ToastrService) { }

  listProject: Array<any>=[]
  ngOnInit(): void {
    this.getAllproject()
  }
   getAllproject(){
     this.projectService.listproject().subscribe(resp=>{
      console.log(resp);
      
      if(resp.status==-1){
       this.tsservice.error(resp.msg,"",{timeOut:3000})
      }else{
        this.listProject = resp.data
        this.tsservice.success(resp.msg,"",{timeOut:3000})
      }
     })
   }
   deleteProject(projectId:any){
     this.projectService.deleteProject(projectId).subscribe(resp=>{
       if(resp.status==-1){
         this.tsservice.error(resp.msg,"",{timeOut:3000})
       }else{
         this.tsservice.success(resp.msg,"",{timeOut:3000})
         this.getAllproject()
       }
     })
   }
   updateProject(projectId:any){
     console.log(projectId);
     
     this.router.navigateByUrl("/admin/editproject/"+projectId)
   }
}
