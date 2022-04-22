import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-pm-edit-project',
  templateUrl: './pm-edit-project.component.html',
  styleUrls: ['./pm-edit-project.component.css']
})
export class PmEditProjectComponent implements OnInit {

  constructor(private projectservice: ProjectService, private Tsservice: ToastrService, private activatedRouted: ActivatedRoute, private Router: Router ) { }
  projectId: string = ""
  projectName: string = ""
  projectManger: string = ""
  description: string = ""
  estimatedHour: string = ""
  technology: string = ""
  managers: Array<any> = []
  ngOnInit(): void {
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
