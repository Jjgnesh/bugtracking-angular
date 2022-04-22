import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-listmodule',
  templateUrl: './listmodule.component.html',
  styleUrls: ['./listmodule.component.css']
})
export class ListmoduleComponent implements OnInit {

  constructor(private projectService: ProjectService, private tsservice: ToastrService, private router: Router) { }
  listModule:Array<any>=[]
  ngOnInit(): void {
    this.listmodule()
  }
  listmodule(){
    this.projectService.listmodule().subscribe(resp=>{
      console.log(resp);
      
     if(resp.status==200){
        this.tsservice.success("",resp.msg,{timeOut:3000})
        this.listModule =resp.data
       }else{
       this.tsservice.error("",resp.msg,{timeOut:3000})
       }
    })
  }
  deletemodule(moduleId:any){
    console.log(moduleId);
    
    this.projectService.deletemodule(moduleId).subscribe(resp=>{
      if(resp.status==200){
        this.tsservice.success("",resp.msg,{timeOut:3000})
        this.listmodule()
       }else{
       this.tsservice.error("",resp.msg,{timeOut:3000})
       }
    })
  }

  updatemodule(moduleId:any){
    this.router.navigateByUrl("/admin/editmodule/"+moduleId)
  }

}
