import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
// import { AuthGuard } from './auth/auth.guard';

// import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
// import { SigninComponent } from './signin/signin.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'skills',component:SkillsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'contact',component:ContactFormComponent},
  // { path: 'signin', component: SigninComponent },
  { 
    path: 'auth',
    loadChildren: () => import('./admin/admin.module').then(m =>m.AdminModule)
 },
  // { path: 'home', component: EditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
