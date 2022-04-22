import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  projectId: string = ""
  projectName: string = ""
  projectManger: string = ""
  description: string = ""
  estimatedHour: string = ""
  technology: string = ""
  managers: Array<any> = []
  constructor(private projectservice: ProjectService, private Tsservice: ToastrService, private activatedRouted: ActivatedRoute, private Router: Router) { }

  ngOnInit(): void {
    this.projectservice.getAllmanager().subscribe(resp => {
      this.managers = resp.data
    })
    this.projectId = this.activatedRouted.snapshot.params["projectId"]
    //console.log(this.projectId);

    this.getProjectbyId()
  }
  getProjectbyId() {
    this.projectservice.getProjectbyId(this.projectId).subscribe(resp => {
      this.projectName = resp.data.projectName
      this.projectManger = resp.data.projectManagerId
      this.description = resp.data.description
      this.estimatedHour = resp.data.estimatedHour
      this.technology = resp.data.technology

    })
  }
  updateProject() {
    let user = { projectId: this.projectId, projectName: this.projectName, description: this.description, projectManagerId: this.projectManger, estimatedHour: this.estimatedHour, technology: this.technology }
    this.projectservice.updateProject(user).subscribe(resp => {
      if (resp.status == -1) {
        this.Tsservice.error(resp.msg, "", { timeOut: 3000 })
      } else {


        this.Tsservice.success(resp.msg, "", { timeOut: 3000 })
        this.Router.navigateByUrl("/admin/listProject")

      }
    })
  }
}
