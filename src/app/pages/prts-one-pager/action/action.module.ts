import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionGridViewComponent } from './action-grid-view/action-grid-view.component';
import { ActionCalenderOnepagerComponent } from './action-calender-onepager/action-calender-onepager.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AddActionGridViewComponent } from './action-grid-view/add-action-grid-view/add-action-grid-view.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  { path: "", redirectTo: "grid-view", pathMatch: "full" },

  {
    path: "grid-view",
    component: ActionGridViewComponent,

   
  },
  {
    path: "calenders",
    component: ActionCalenderOnepagerComponent,


  },

]

@NgModule({
  declarations: [
    ActionGridViewComponent,
    ActionCalenderOnepagerComponent,
    AddActionGridViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class ActionModule { }
