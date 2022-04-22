import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-pm-completed-project',
  templateUrl: './pm-completed-project.component.html',
  styleUrls: ['./pm-completed-project.component.css']
})
export class PmCompletedProjectComponent implements OnInit {

  constructor(private ProjectService: ProjectService, private tsService: ToastrService) { }
  projects: Array<any> = []
  managerId: string = ""
  ngOnInit(): void {
    this.complateProjectofPm()

  }
  complateProjectofPm() {
    this.managerId = localStorage.getItem("userId") as string
    console.log(this.managerId);
    
    this.ProjectService.complateProjectofPm(this.managerId).subscribe(resp=>{
      if(resp.status==-1){
        this.tsService.error("",resp.msg,{timeOut:3000})
        
      
        }
        else{
          this.tsService.success("",resp.msg,{timeOut:3000})
          
          
          this.projects=resp.data
        }
    })
  }
}
