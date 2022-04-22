import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddroleComponent } from './admin/addrole/addrole.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { ProjectsComponent } from './admin/Addprojects/projects.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ListroleComponent } from './admin/listrole/listrole.component';
import { EditroleComponent } from './admin/editrole/editrole.component';
import { ListprojectComponent } from './admin/listproject/listproject.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
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


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AddroleComponent,
    AdminDashboardComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,

    AdminFooterComponent,
    ProjectsComponent,
    ForgetPasswordComponent,
    ListroleComponent,
    EditroleComponent,
    ListprojectComponent,
    ChangepasswordComponent,
    AddmoduleComponent,
    EditprojectComponent,
    ListmoduleComponent,
    EditmoduleComponent,
    AddtaskComponent,
    ListuserComponent,
    PendingApprovelComponent,
    ListtaskComponent,
    EdittaskComponent,
    PendingProjectComponent,
    ComplatedProjectComponent,
    AddprojectTeamComponent,
    ListprojectTeamComponent,
    AssignTaskComponent,
    AssignModuleComponent,
    AddMemberComponent,
    ProjectManagerComponent,
    PmSidebarComponent,
    PmHeaderComponent,
    PmDashboardComponent,
    UserReportComponent,
    ProjectReportComponent,
    AddUserComponent,
    PmAddUserComponent,
    PmPendingApprovelComponent,
    PmUserListComponent,
    PmListProjectComponent,
    PmEditProjectComponent,
    PmCompletedProjectComponent,
    PmPendingProjectComponent,
    PmAddModuleComponent,
    PmListModuleComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
