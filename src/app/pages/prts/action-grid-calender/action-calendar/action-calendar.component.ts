
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
  selector: 'app-action-calendar',
  templateUrl: './action-calendar.component.html',
  styleUrls: ['./action-calendar.component.scss']
})
export class ActionCalendarComponent implements OnInit {

  
  ngOnInit(): void {
  }
  breadcrumb = "Time Sheet"

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  filterToggle: boolean = false;
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




  // months = [{ id: 1, value: "January" }, { id: 2, value: "February" }, { id: 3, value: "March" }, { id: 4, value: "April" }, { id: 5, value: "May" }, { id: 6, value: "June" }, { id: 7, value: "July" }, { id: 8, value: "August" }, { id: 9, value: "September" }, { id: 10, value: "OCtober" }, { id: 11, value: "November" }, { id: 12, value: "December" }];
  // years = [{ id: 1, value: "2019" }, { id: 2, value: "2020" }, { id: 3, value: "2021" }, { id: 4, value: "2022" }];
  // calendarEvents = [];
  // view: string = 'month';
  // public meetings_filter = "";
  // public meetings_filters = "";
  // viewDate: Date = new Date();
  // activeDayIsOpen: boolean = true;
  // filterToggle: boolean = false;
  // events: CalendarEvent[] = [{
  //   start: new Date(),
  //   end: new Date(),
  //   title: 'A 3 day event sfdhsufhs sdgfudtgfu sdtfyusdtfsd tdsyftsduyf stdyftsdyf sdtf6sdyfsd fsdrfs6ddr',
  //   color: colors.red,
  // }, {
  //   start: startOfDay(new Date()),
  //   title: 'An event with no end date',
  //   color: colors.yellow,
  // }, {
  //   start: subDays(endOfMonth(new Date()), 3),
  //   end: addDays(endOfMonth(new Date()), 3),
  //   title: 'A long event that spans 2 months',
  //   color: colors.blue
  // }, {
  //   start: addHours(startOfDay(new Date()), 2),
  //   end: new Date(),
  //   title: 'A draggable and resizable event',
  //   color: colors.yellow,
  //   resizable: {
  //     beforeStart: true,
  //     afterEnd: true
  //   },
  //   draggable: true
  // }];
  // refresh: Subject<any> = new Subject();


  // //public settings: Settings;
  // totalMeetings: any;

  // canCreate: any;
  // canUpdate: any;
  // canDelete: any;

  // gridRead: any;
  // calenderRead: any;

  // constructor(public appSettings: AppSettings,
  //   public dialog: MatDialog,
  //   public router: Router,
  //   public snackBar: MatSnackBar) {
  //   // this.settings = this.appSettings.settings;
  // }

  // ngOnInit() {
  //   this.getMeetingsForCalendar();

  //   // let gridData = JSON.parse(localStorage.getItem('sg_user_info')).user_permissions[20];
  //   // let calenderData = JSON.parse(localStorage.getItem('sg_user_info')).user_permissions[21];

  //   // this.gridRead = parseInt(gridData.permission_type.split('')[1]);
  //   // this.calenderRead = parseInt(calenderData.permission_type.split('')[1]);

  //   // this.canCreate = parseInt(calenderData.permission_type.split('')[0]);
  //   // this.canUpdate = parseInt(calenderData.permission_type.split('')[2]);
  //   // this.canDelete = parseInt(calenderData.permission_type.split('')[3]);

  //   if (!this.calenderRead)
  //     this.router.navigate(["/salesglobal/meeting/gridview"]);
  // }

  // public getMeetingsForCalendar(filters = {}) {
  //   const shadowUserId = localStorage.getItem("shadowUserId") || null;
  //   if (shadowUserId) {
  //     filters = { ...filters, shadowUserId };
  //   }
  //   if (localStorage.getItem('timeZone')) {
  //     filters["timeZone"] = localStorage.getItem('timeZone');
  //   }
  //   filters['activeCheckedDate'] = new Date(subDays(startOfDay(new Date()), 1));
  //   // this.calService.getMeetings(filters).then(data => {
  //   //   if (data.success) {
  //   //     this.totalMeetings = data.results;
  //   //     for (let i = 0; i < data.results.length; i++) {
  //   //       let originalStartTime = data.results[i]["meeting_start_time"];
  //   //       var d = new Date(originalStartTime);
  //   //       var hours = d.getHours();
  //   //       var minutes = d.getMinutes();
  //   //       var minutess = minutes < 10 ? '0' + minutes : minutes;
  //   //       var suffix = hours >= 12 ? "PM" : "AM";
  //   //       data.results[i].start_time = hours + ":" + minutess + " ";
  //   //       let obj = {};
  //   //       if (data.results[i].meeting_start_date) {
  //   //         let dateNow = data.results[i].meeting_start_date.split('-');
  //   //         let year = dateNow[2];
  //   //         let date = dateNow[0];
  //   //         let month = dateNow[1];
  //   //         obj['start'] = new Date(parseInt(year), parseInt(month) - 1, parseInt(date));
  //   //       }

  //   //       if (data.results[i]) {
  //   //         console.log(data.results[i]);
  //   //         // console.log(data.results[i].meeting_subject,'data.results[i].meeting_subject',data.results[i].sg_tbl_lead.lead_name,'data.results[i].sg_tbl_lead.lead_name',data.results[i].start_time,'data.results[i].start_time',data.results[i].sg_tbl_timezone.code,'data.results[i].sg_tbl_timezone.code')
  //   //         let text = (data.results[i].meeting_subject ? data.results[i].meeting_subject : '-') + ' : ' + (data.results[i].business_name ? data.results[i].business_name : '-') + ' : ' + data.results[i].start_time + ' ';
  //   //         // console.log(text);
  //   //         // if (data.results[i].sg_tbl_lead.lead_type == 5 || data.results[i].sg_tbl_lead.lead_type == 6 || data.results[i].sg_tbl_lead.lead_type == 7 || data.results[i].sg_tbl_lead.lead_type == 8) {
  //   //         //   obj['title'] = 'Conversation : ' + text;
  //   //         // } else {
  //   //         // obj['title'] = 'Possibility : ' + text;
  //   //         obj['title'] = text;
  //   //         // }
  //   //       }

  //   //       if ((i + 1) % 2 == 0) {
  //   //         obj['color'] = colors.grey;
  //   //       }
  //   //       else if ((i + 1) % 3 == 0) {
  //   //         obj['color'] = colors.grey;
  //   //       }
  //   //       else {
  //   //         obj['color'] = colors.grey;
  //   //       }
  //   //       // console.log(obj);
  //   //       this.calendarEvents.push(obj);
  //   //       this.viewDate = new Date();
  //   //     }
  //   //     // console.log(this.calendarEvents);
  //   //     // this.totalMeetings = data.results;
  //   //     // for(let i = 0 ; i < this.calendarEvents.length ; i++) {
  //   //     //   if((this.calendarEvents[i].start).toDateString() == new Date().toDateString()) {
  //   //     //     this.activeDayIsOpen = true;
  //   //     //     break;
  //   //     //   }
  //   //     //   else {
  //   //     //     this.activeDayIsOpen = false;
  //   //     //   }
  //   //     // }
  //   //   } else {
  //   //     this.totalMeetings = [];
  //   //     this.alertService.createAlert(data.message, 0);
  //   //   }
  //   // })
  // }

  // dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
  //   if (isSameMonth(date, this.viewDate)) {
  //     console.log(date, this.viewDate);
  //     if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
  //       this.activeDayIsOpen = false;
  //     } else {
  //       this.activeDayIsOpen = true;
  //       this.viewDate = date;
  //     }
  //   }
  // }

  // clearFilter() {
  //   this.meetings_filter = "";
  //   this.meetings_filters = "";
  //   this.getMeetingsForCalendar();
  // }

  // filterLeads() {
  //   //   console.log(this.meetings_filter, this.meetings_filters)
  //   //   if (this.meetings_filter == '' || this.meetings_filters == '') {
  //   //     if (this.meetings_filters == '')
  //   //       this.alertService.createAlert("Please select Month", 0);
  //   //     if (this.meetings_filter == '')
  //   //       this.alertService.createAlert("Please select Year", 0);
  //   //   }

  //   //   else
  //   //     this.viewDate = new Date(parseInt(this.meetings_filter), (parseInt(this.meetings_filters) - 1), 1);
  // }

}
