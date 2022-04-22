import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-complated-project',
  templateUrl: './complated-project.component.html',
  styleUrls: ['./complated-project.component.css']
})
export class ComplatedProjectComponent implements OnInit {

  constructor(private ProjectService:ProjectService,private tsService:ToastrService) { }
  projects : Array<any>=[]
  ngOnInit(): void {
    this.complatedProject()
  }
  complatedProject(){
    this.ProjectService.complatedProject().subscribe(resp=>{
      if(resp.status==200){
        this.tsService.success("",resp.msg,{timeOut:3000})
        this.projects=resp.data
      }else{
        this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
  }
}
