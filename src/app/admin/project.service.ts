import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private Httpclient: HttpClient) { }
  //<----------------------Project------------------------------->
  addproject(project: any): Observable<any> {
    return this.Httpclient.post("http://localhost:3000/project", project)
  }
  getAllmanager(): Observable<any> {
    return this.Httpclient.get("http://localhost:3000/Manager")
  }

  listproject(): Observable<any> {
    return this.Httpclient.get("http://localhost:3000/project")
  }
  deleteProject(projectId: any): Observable<any> {
    return this.Httpclient.delete("http://localhost:3000/project/" + projectId)
  }
  getProjectbyId(projectId:any): Observable<any> {
    return this.Httpclient.get("http://localhost:3000/projects/"+projectId)
  }
  updateProject(user: any): Observable<any> {
    return this.Httpclient.put("http://localhost:3000/projects",user)
  }
  pendingProject():Observable<any>{
    return this.Httpclient.get("http://localhost:3000/pendingProject")
  }
  complatedProject():Observable<any>{
    return this.Httpclient.get("http://localhost:3000/complatedProject")
  }
  getProjectName(projectId:any):Observable<any>{
    return this.Httpclient.get("http://localhost:3000/getProjectName/"+projectId)

  }
  getProjectByStatus(statusId:any):Observable<any>{
    return this.Httpclient.get("http://localhost:3000/getProjectbyStatus/"+statusId)
  }
  getProjectbymanager(managerId:any):Observable<any>{
    return this.Httpclient.get("http://localhost:3000/getProjectBymanager/"+managerId)
  }
  upadateprojectStatus(projectId:any):Observable<any>{
    return this.Httpclient.get("http://localhost:3000/upadateprojectStatus/"+projectId)
  }
  complateProjectofPm(managerId:any):Observable<any>{
    return this.Httpclient.get("http://localhost:3000/complateProjectofPm/"+managerId)
  }
  pendingProjectforPm(managerId:any):Observable<any>{
      return this.Httpclient.get("http://localhost:3000/pendingProjectforPm/"+managerId)
  }
  getpendingprojectforpm(managerId:any):Observable<any>{
    return this.Httpclient.get("http://localhost:3000/getpendingprojectforPm/"+managerId)
  }
//<-----------------------------------module--------------------------->

getAllProject():Observable<any>{
  return this.Httpclient.get("http://localhost:3000/project")
}
getAllpriority():Observable<any>{
  return this.Httpclient.get("http://localhost:3000/priority")
}
addmodule(module:any):Observable<any>{
  return this.Httpclient.post("http://localhost:3000/module",module)
}
listmodule():Observable<any>{
  return this.Httpclient.get("http://localhost:3000/module")
}
deletemodule(moduleId:any):Observable<any>{
  return this.Httpclient.delete("http://localhost:3000/module/"+moduleId)
}
getmodulebyId(moduleId:any):Observable<any>{
  return this.Httpclient.get("http://localhost:3000/modules/"+moduleId)
}
updatemodule(module:any):Observable<any>{
  return this.Httpclient.put("http://localhost:3000/modules",module)
}
//<-----------------------------------Task--------------------------->
getmodulebyproject(projectId:any):Observable<any>{
  return this.Httpclient.get("http://localhost:3000/getmodulebyproject/"+projectId)
}
addtask(task:any):Observable<any>{
  return this.Httpclient.post("http://localhost:3000/task",task)
}
listtask():Observable<any>{
  return this.Httpclient.get("http://localhost:3000/task")
}
deletetask(taskId:any):Observable<any>{
  return this.Httpclient.delete("http://localhost:3000/task/"+taskId)
}
gettaskbyId(taskId:any):Observable<any>{
  return this.Httpclient.get("http://localhost:3000/gettaskbyId/"+taskId)
}
updatetask(task:any):Observable<any>{
  return this.Httpclient.put("http://localhost:3000/task",task)
}
getTaskByModule(moduleId:any):Observable<any>{
  return this.Httpclient.get("http://localhost:3000/taskByModule/"+moduleId)
}
//<-----------------------------------ListUser--------------------------->
getAlluser():Observable<any>{
  return this.Httpclient.get("http://localhost:3000/users")
}
deleteUser(userId:any):Observable<any>{
  return this.Httpclient.delete("http://localhost:3000/users/"+userId)

}
//<-----------------------------------ListUser--------------------------->
assignTask(task:any):Observable<any>{
  return this.Httpclient.post("http://localhost:3000/taskusers",task)
}

//<-----------------------------------Pending Approvel--------------------------->
pendingAppprovel():Observable<any>{
  return this.Httpclient.get("http://localhost:3000/pendingUser")
}
approveduser(user:any):Observable<any>{
  return this.Httpclient.put("http://localhost:3000/approvedUser",user)
}
deleteuser(userId:any):Observable<any>{
  return this.Httpclient.delete("http://localhost:3000/users/"+userId )
}
//<-----------------------------------Project Team--------------------------->
addProjectTeam(projectTeam:any):Observable<any>{
  return this.Httpclient.post("http://localhost:3000/projectTeam",projectTeam)
}
getProjectTeambyID(projectId:any):Observable<any>{
  return this.Httpclient.get("http://localhost:3000/projectTeam/"+projectId)
}

disableUserForProject(userId:any):Observable<any>{
  return this.Httpclient.get("http://localhost:3000/disableMember/"+userId)
}
//<-----------------------------------Module Task--------------------------->
assignModule(modules:any):Observable<any>{
  return this.Httpclient.post("http://localhost:3000/addmoduleUser",modules)
}
}