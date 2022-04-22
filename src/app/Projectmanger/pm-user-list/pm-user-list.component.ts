import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-pm-user-list',
  templateUrl: './pm-user-list.component.html',
  styleUrls: ['./pm-user-list.component.css']
})
export class PmUserListComponent implements OnInit {

  constructor(private projectservice:ProjectService,private tsService:ToastrService) { }
  users : Array<any>=[]
  ngOnInit(): void {
    this.getAlluser()
  }
  getAlluser(){
    this.projectservice.getAlluser().subscribe(resp=>{
    
      if(resp.status==200){
        this.users=resp.data
        this.tsService.success("",resp.msg,{timeOut:3000})
      }else{
        this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
  }
  deleteUser(userId:any){
  //  console.log(userId);
    
    this.projectservice.deleteUser(userId).subscribe(resp=>{
      if(resp.status==200){
        this.getAlluser()
        this.tsService.success("",resp.msg,{timeOut:3000})
      }else{
        this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
    
  }
}
