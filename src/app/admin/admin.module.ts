import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HeaderComponent } from './components/header/header.component';

import { ModalComponent } from './components/form-modal/form-modal.component';

import { AdminSkillsComponent } from './components/admin-skills/admin-skills.component';
import { AdminAboutComponent } from './components/admin-about/admin-about.component';
import { MessagesPageComponent } from './pages/messages-page/message-page.component';


@NgModule({
  declarations: [
    AdminComponent,
    AuthPageComponent,
    AdminPageComponent,
    
    AdminProjectsComponent,
    AdminSkillsComponent,
    // AdminToolsListComponent,
    AdminAboutComponent,
    ModalComponent,
    MessagesPageComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }