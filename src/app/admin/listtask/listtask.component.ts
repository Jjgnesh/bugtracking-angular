import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent implements OnInit {

  constructor(private projectService:ProjectService,private tsService:ToastrService,private router:Router) { }
  task : Array<any>=[]
  ngOnInit(): void {
    this.listtask()
  }

  listtask(){
    this.projectService.listtask().subscribe(resp=>{
      if(resp.status==200){
        this.tsService.success("",resp.msg,{timeOut:3000})
        this.task=resp.data
      }else{
        this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
  }
  deletetask(taskId:any){
    this.projectService.deletetask(taskId).subscribe(resp=>{
      if(resp.status==200){
        this.tsService.success("",resp.msg,{timeOut:3000})
        this.listtask()
      }else{
        this.tsService.error("",resp.msg,{timeOut:3000})
      }  
    })
  }
  updatetask(taskId:any){
    this.router.navigateByUrl("/admin/edittask/"+taskId)
  }
}
