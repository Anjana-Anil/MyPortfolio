import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

import { IFormFields } from '../../interfaces/form-fields.interface';
import { IFormModal } from '../../interfaces/form-modal.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './admin-projects.component.html',
  styleUrls: ['./admin-projects.component.css']
})
export class AdminProjectsComponent implements OnInit {

  projectsCollectionRef = this.dataService.createCollection('projects');


  formFields: Array<IFormFields> = [
    {
      label: 'Project Name',
      formControlName: 'projectName',
      placeholder: ''
    } ,
    
    {
      label: 'Project Icon URL',
      formControlName: 'projectIconUrl',
      placeholder: ''
    },
    {
      label: 'Project Description',
      formControlName: 'description',
      placeholder: ''
    },
  ];

  formModalContent: IFormModal = {
    title: 'Try adding a new project to this list',
    buttonText: 'Add a new project',
    isVisible: false,
    isEditing: false,
    formFields: this.formFields
  };

  private itemId: string;
  $projects: Observable<any[]>;
  
  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.$projects = this.dataService.getData(this.projectsCollectionRef);
  }

  public addProject($event) {
    const { projectName,description,projectIconUrl} = $event;
    this.projectsCollectionRef.add({projectName,description, projectIconUrl  });
  }

  public editProject($event: { projectName: any; description: any; projectIconUrl: any; }) {
    const { projectName, description,projectIconUrl } = $event;
      this.projectsCollectionRef.doc(this.itemId).update({ projectName,description, projectIconUrl });
  }

  public removeProject(id: string) {
   this.projectsCollectionRef.doc(id).delete();
  }

  public editModal(project: any) {
    this.formModalContent.isEditing = true;
    this.formModalContent.isVisible = true;
    this.formModalContent.title = 'Try editing this item';
    this.formModalContent.buttonText = 'Edit project';

    this.itemId = project.id;
  }

  public showModal() {
    this.resetModalContent();
    this.formModalContent.isVisible = true;
  }

  public resetModalContent() {
    this.formModalContent.isEditing = false;
    this.formModalContent.title = 'Try adding a new project to this list';
    this.formModalContent.buttonText = 'Add a new project';
  }

}
