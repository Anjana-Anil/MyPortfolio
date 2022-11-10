// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-skills',
//   templateUrl: './skills.component.html',
//   styleUrls: ['./skills.component.css']
// })
// export class SkillsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Observable<any[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.skills = this.dataService.createCollection('skills');
  }

}