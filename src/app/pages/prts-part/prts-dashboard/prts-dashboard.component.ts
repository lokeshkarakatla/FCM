import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientsData } from '../clientsdata';
import { SharedModule } from 'src/app/shared/shared.module';
import { Settings } from 'src/app/app.settings.model';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  grey: {
    primary: '#717D7E',
    secondary: '#717D7E'
  }
};
@Component({
  selector: 'app-prts-dashboard',
  templateUrl: './prts-dashboard.component.html',
  styleUrls: ['./prts-dashboard.component.scss']
})
export class PrtsDashboardComponent implements OnInit {
  headers = [
    { Name: 'Client Name', IsSelected: true },
    { Name: 'Projects', IsSelected: true },
    { Name: 'Contacts', IsSelected: true },
    { Name: 'Contact Name', IsSelected: true },
    { Name: 'Client Type', IsSelected: true },
    { Name: 'Industry', IsSelected: true },
    { Name: 'Email', IsSelected: true },
    { Name: 'Mobile Number', IsSelected: true },
    { Name: 'Country', IsSelected: true },
    { Name: 'City', IsSelected: true },
    { Name: 'State', IsSelected: true },
    { Name: 'Postal Code', IsSelected: true },
    { Name: 'GST', IsSelected: true },
    { Name: 'PAN', IsSelected: true },

  ];
  savedHeaders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  public single: any[];
  public multi: any[];
  public triple: any[];
  public showLegend = false;
  public gradient = false;
  allClients: any[];
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  color = 'accent';
  checked = true;
  public first: any[];


  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public setting = [];
  sortedData: any;
  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  filteredClients = [];
  status = [{ 'status_id': '1', 'status_name': 'Active' },
  { 'status_id': '2', 'status_name': 'Inactive' }]
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  public status_filter = "";
  contactName = new FormControl();
  clientName = new FormControl();
  jobTitle = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  ngOnInit(): void {
    if (environment.mode == 1) { // UI Mode
     // this.tbaleList = this.totalClients;
      const first = ClientsData.PiechartData1();
      const multi = ClientsData.PieChartData2();
      const triple = ClientsData.PieChartData3();
      Object.assign(this, { first, multi, triple });
    }

    else {
      // Api comes Here
    }
  }
  breadcrumb = "Time Sheet"
  
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
 
  CalendarView = CalendarView;

  viewDate: Date = new Date();
  selected = '0'
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      // a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      // a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'UI of Activity Hub Module',
      color: colors.red,
      // actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      // draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'Chnages in Users screen',
      color: colors.yellow,
      // actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Chages in scorecard',
      color: colors.blue,
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'Changes in ERM',
      color: colors.yellow,
      // actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      // draggable: true,
    },
  ];

  activeDayIsOpen: boolean = true;

  constructor() { }
  

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {

    console.log('click date')
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        // draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  public onSelect(event) {
    // console.log(event);
  }


  
}


