import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroleComponent } from './admin/addrole/addrole.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ListprojectComponent } from './admin/listproject/listproject.component';
import { ListroleComponent } from './admin/listrole/listrole.component';
import { ProjectsComponent } from './admin/Addprojects/projects.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditroleComponent } from './admin/editrole/editrole.component';
import { AddmoduleComponent } from './admin/addmodule/addmodule.component';
import { EditprojectComponent } from './admin/editproject/editproject.component';
import { ListmoduleComponent } from './admin/listmodule/listmodule.component';
import { EditmoduleComponent } from './admin/editmodule/editmodule.component';
import { AddtaskComponent } from './admin/addtask/addtask.component';
import { ListuserComponent } from './admin/listuser/listuser.component';
import { PendingApprovelComponent } from './admin/pending-approvel/pending-approvel.component';
import { ListtaskComponent } from './admin/listtask/listtask.component';
import { EdittaskComponent } from './admin/edittask/edittask.component';
import { PendingProjectComponent } from './admin/pending-project/pending-project.component';
import { ComplatedProjectComponent } from './admin/complated-project/complated-project.component';
import { AddprojectTeamComponent } from './admin/addproject-team/addproject-team.component';
import { ListprojectTeamComponent } from './admin/listproject-team/listproject-team.component';
import { AssignTaskComponent } from './admin/assign-task/assign-task.component';
import { AssignModuleComponent } from './admin/assign-module/assign-module.component';
import { AddMemberComponent } from './admin/add-member/add-member.component';
import { ProjectManagerComponent } from './Projectmanger/project-manager/project-manager.component';
import { PmSidebarComponent } from './Projectmanger/pm-sidebar/pm-sidebar.component';
import { PmHeaderComponent } from './Projectmanger/pm-header/pm-header.component';
import { PmDashboardComponent } from './Projectmanger/pm-dashboard/pm-dashboard.component';
import { UserReportComponent } from './admin/user-report/user-report.component';
import { ProjectReportComponent } from './admin/project-report/project-report.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { PmAddUserComponent } from './Projectmanger/pm-add-user/pm-add-user.component';
import { PmPendingApprovelComponent } from './Projectmanger/pm-pending-approvel/pm-pending-approvel.component';
import { PmUserListComponent } from './Projectmanger/pm-user-list/pm-user-list.component';
import { PmListProjectComponent } from './Projectmanger/pm-list-project/pm-list-project.component';
import { PmEditProjectComponent } from './Projectmanger/pm-edit-project/pm-edit-project.component';
import { PmCompletedProjectComponent } from './Projectmanger/pm-completed-project/pm-completed-project.component';
import { PmPendingProjectComponent } from './Projectmanger/pm-pending-project/pm-pending-project.component';
import { PmAddModuleComponent } from './Projectmanger/pm-add-module/pm-add-module.component';
import { PmListModuleComponent } from './Projectmanger/pm-list-module/pm-list-module.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"forgetpassword",component:ForgetPasswordComponent},
  {path:"changepassword",component:ChangepasswordComponent},
  
  {path:"admin",component:AdminComponent,children:[
    {path:"admin-dashboard",component: AdminDashboardComponent},
    {path:"adminsidebar",component:AdminSidebarComponent},
    {path:"adminheader",component:AdminHeaderComponent},
    {path:"admin-footer",component:AdminFooterComponent},
    {path:"addRole",component:AddroleComponent},
    {path:"listRole",component:ListroleComponent},
    {path:"editrole/:roleId",component:EditroleComponent},
    {path:"projects",component:ProjectsComponent},
    {path:"listProject",component:ListprojectComponent},
    {path:"editproject/:projectId",component:EditprojectComponent},
    {path:"addmodule",component:AddmoduleComponent},
    {path:"listmodule",component:ListmoduleComponent},
    {path:"editmodule/:moduleId",component:EditmoduleComponent},
    {path:"addtask",component:AddtaskComponent},
    {path:"listuser",component:ListuserComponent},
    {path:"pendingApprovel",component:PendingApprovelComponent},
    {path:"listtask",component:ListtaskComponent},
    {path:"edittask/:taskId",component:EdittaskComponent},
    {path:"pendingProject",component:PendingProjectComponent},
    {path:"complatedProject",component:ComplatedProjectComponent},
    {path:"addprojectTeam",component:AddprojectTeamComponent},
    {path:"listProjectTeam",component:ListprojectTeamComponent},
    {path:"assignTask/:user",component:AssignTaskComponent},
    {path:"assignModule/:user",component:AssignModuleComponent},
    {path:"addMember/:projectId",component:AddMemberComponent},
    {path:"userReport",component:UserReportComponent},
    {path:"projectReport",component:ProjectReportComponent},
    {path:"addUser",component:AddUserComponent}
  ]},
  {path:"projectmanager",component:ProjectManagerComponent,children:[
    {path:"pm-dashboard",component:PmDashboardComponent},
    {path:"pm-addUser",component:PmAddUserComponent},
    {path:"pm-pendingApprovel",component:PmPendingApprovelComponent},
    {path:"pm-userList",component:PmUserListComponent},
    {path:"pm-listProject",component:PmListProjectComponent},
    {path:"pm-editProject/:projectId",component:PmEditProjectComponent},
    {path:"pm-complatedProject",component:PmCompletedProjectComponent},
    {path:"pm-pendingProject",component:PmPendingProjectComponent},
    {path:"pm-addModule",component:PmAddModuleComponent},
    {path:"pm-listModule",component:PmListModuleComponent}
  
    
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
