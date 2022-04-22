import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {
  roleName: String=""

  constructor(private roleservice:RoleserviceService,private tsservice:ToastrService,private Router:Router) { }

  ngOnInit(): void {
  }
  addRole(){
    let role={roleName:this.roleName}
    this.roleservice.addrole(role).subscribe(resp=>{
      if(resp.status==-1){
        this.tsservice.error(resp.msg,"",{timeOut:3000})
      }else{
        this.tsservice.success(resp.msg,"",{timeOut:3000})
        this.Router.navigateByUrl("/admin/listRole")
      }
      
    })

  }

}
