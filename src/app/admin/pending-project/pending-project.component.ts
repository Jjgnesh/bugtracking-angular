import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-pending-project',
  templateUrl: './pending-project.component.html',
  styleUrls: ['./pending-project.component.css']
})
export class PendingProjectComponent implements OnInit {

  constructor(private projectService:ProjectService,private toaster:ToastrService,private router:Router) { }
  Project :Array<any>=[]
  ngOnInit(): void {
    this.pendingProject()
  }
  pendingProject(){
    this.projectService.pendingProject().subscribe(resp=>{
      if(resp.status==200){
        this.toaster.success("",resp.msg,{timeOut:3000})
        this.Project=resp.data
        console.log(this.Project);
      }else{
        this.toaster.error("",resp.msg,{timeOut:3000})
      }
    })
  }
}
