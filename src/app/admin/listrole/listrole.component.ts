import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-listrole',
  templateUrl: './listrole.component.html',
  styleUrls: ['./listrole.component.css']
})
export class ListroleComponent implements OnInit {

  constructor(private roleService: RoleserviceService, private tsservice: ToastrService, private Router: Router) { }

  roles: Array<any> = []

  ngOnInit(): void {

    this.getAllroles()

  }
  deleterole(roleId: any) {
    this.roleService.deleterole(roleId).subscribe(resp => {
      if (resp.status == -1) {
        this.tsservice.error(resp.msg, "", { timeOut: 3000 })
        console.log(resp);

      } else {
        this.tsservice.success(resp.msg, "", { timeOut: 3000 })
        this.getAllroles()
      }
    })
  }
  getAllroles() {
    this.roleService.listrole().subscribe(resp => {
      if (resp.status == -1) {
        this.tsservice.error(resp.msg, "", { timeOut: 3000 })
      } else {
        this.tsservice.success(resp.msg, "", { timeOut: 3000 })
        this.roles = resp.data
      }
    })
  }
 
  updaterole(roleId:any){
    this.Router.navigateByUrl("/admin/editrole/"+roleId)
  }
}
