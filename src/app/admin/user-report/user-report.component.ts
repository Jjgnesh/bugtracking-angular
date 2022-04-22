import { Component, OnInit } from '@angular/core';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  constructor(private roleService:RoleserviceService) { }
  roleId:string=""
role:Array<any>=[]
user:Array<any>=[]
  ngOnInit(): void {
    this.roleService.listrole().subscribe(resp=>{
      this.role=resp.data
    })
  }
  userReport(event:any){
    const roles= event.target.value;
    
    this.roleService.getUserByRole(roles).subscribe(resp=>{
      console.log(resp);  
      
      this.user=resp.data
    })
  }

}
