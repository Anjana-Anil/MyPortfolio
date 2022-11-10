// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.css']
// })
// export class ProjectsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  $projects: Observable<any[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.$projects = this.dataService.createCollection('projects');
  }

}