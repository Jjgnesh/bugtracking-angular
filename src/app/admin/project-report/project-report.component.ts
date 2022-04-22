import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrls: ['./project-report.component.css']
})
export class ProjectReportComponent implements OnInit {

  constructor(private roleService:RoleserviceService,private tsService:ToastrService,private projectService:ProjectService) { }
  statusId:string=""
  status: Array<any>=[]
  ngOnInit(): void {
    this.roleService.getAllStatus().subscribe(resp=>{
      this.status=resp.data
    })
  }
  getProjectbyStatus(event:any){
    let status =event.target.value;
    this.projectService.getProjectByStatus(status).subscribe(resp=>{
      console.log(resp);
      
      this.status=resp.data
    })
  }
}
