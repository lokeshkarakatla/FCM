import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionGridCalenderComponent } from './action-grid-calender.component';
import { ActionGridMeetComponent } from './action-grid-meet/action-grid-meet.component';
import { ActionCalendarComponent } from './action-calendar/action-calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
//import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AddActionGridMeetComponent } from './action-grid-meet/add-action-grid-meet/add-action-grid-meet.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { ExtendedModule } from "@angular/flex-layout";
const routes: Routes = [
  { path: "", redirectTo: "grid-meet", pathMatch: "full" },

  // {
  //   path: "action-grid",
  //   component: ActionGridCalenderComponent,
  //   loadChildren: () =>
  //     import("./action-grid-calender/action-grid-calender.module").then((m) => m.ActionGridCalenderModule),
  //   data: { breadcrumb: 'Actions Grid view', description: 'This page is used to Actions' }
  // },
  {
    path: "grid-meet",
    component: ActionGridMeetComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Action', description: "Grid view screen",hideBreadcrumb: true }
  },
  {
    path: "calender",
    component: ActionCalendarComponent,
    pathMatch: "full",
    data: { breadcrumb: 'Action', description: "Grid view screen",hideBreadcrumb: true }
  },
]

@NgModule({
  declarations: [
    ActionGridCalenderComponent,
    ActionGridMeetComponent,
    ActionCalendarComponent,
    AddActionGridMeetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    // OwlDateTimeModule,
    // OwlNativeDateTimeModule,
    CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
    }),
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    ExtendedModule
]
})
export class ActionGridCalenderModule { }
