import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css']
})
export class EditroleComponent implements OnInit {
  roleId: string = ""
  roleName: string = ""

  constructor(private activatedrouted: ActivatedRoute, private Router: Router, private tsservice: ToastrService, private roleservice: RoleserviceService) { }

  ngOnInit(): void {
    this.roleId = this.activatedrouted.snapshot.params['roleId']
    this.getrolesbyId()

  }
  getrolesbyId() {
    this.roleservice.getrolesbyId(this.roleId).subscribe(resp => {
      this.roleName = resp.data.roleName

      if (resp.status == -1) {
        this.tsservice.error(resp.msg, "", { timeOut: 3000 })
      } else {
        this.tsservice.success(resp.msg, "", { timeOut: 3000 })

      }
    })
  }
  updateRole() {
    let role = {
      roleId: this.roleId,
      roleName: this.roleName
    }
    console.log(role);
    
    this.roleservice.updaterole(role).subscribe(resp => {
      if (resp.status == -1) {
        this.tsservice.error(resp.msg, "", { timeOut: 3000 })
      } else {
        
        
        this.tsservice.success(resp.msg, "", { timeOut: 3000 })
        this.Router.navigateByUrl("/admin/listRole")

      }
    })
  }
}
