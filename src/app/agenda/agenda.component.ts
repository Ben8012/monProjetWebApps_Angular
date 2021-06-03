import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
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
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { FlatpickrDefaultsInterface } from 'angularx-flatpickr/flatpickr-defaults.service';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';
import { EventsPlongee, Formations, SiteDePlongee, Speciality, UserInfo } from '../shared/api/class.service';
import { ChangeDetectorRef } from '@angular/core';
import { DateUtils} from '../utils/date.utils'
import { UserSessionService } from '../shared/api/user-session.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'agenda-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['agenda.component.scss'],
  templateUrl: './agenda.component.html',
})
export class AgendaComponent  {
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();
  
  events: CalendarEvent[] = [];
  
// Ajouter les options du datePicker permet dans donner une nombre de jour ou un evement peut etre créé
  public datePickerOptionsStart : FlatpickrDefaultsInterface = {

    enable : [{from : new Date(Date.now()), to : new Date(new Date().getFullYear() + 200, 12)}]
  }

  public datePickerOptionsEnd : FlatpickrDefaultsInterface = {
   
        enable : [{from : new Date(Date.now()), to : new Date(new Date().getFullYear() + 200, 12)}]
       
      }

  activeDayIsOpen: boolean = true
  formEvent: any
  OneProfile: any
  id:any

  constructor(private modal: NgbModal,private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router, private siteDePlongeeService:SiteDePlongeeService, private route : ActivatedRoute,private ref: ChangeDetectorRef,public userSessionService : UserSessionService,) 
  {
    this.OneProfile = this.route.snapshot.data["datas2"]
    this.eventsPlongee = this.route.snapshot.data["datas1"]
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
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
    this.modal.open(this.modalContent, { size: 'lg' });
    
  }


  
  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: '',
        userId:this.user.userId,
        instructor:this.user.surname,
        training: false,
        location:'',
        level:'',
        speciality:'',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];

    
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete); 
    this.apiService.deleteEvent(eventToDelete.id)
  }
  
  updateEvent(eventToUpdate: CalendarEvent) {
    this.apiService.postUpdateEvent(eventToUpdate)
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

//mon code

  formations:Formations[]=[];
  specialitys:Speciality[]=[];
  sites:SiteDePlongee[]=[];
  eventsPlongee:EventsPlongee[]=[];
  training:boolean=false;
  user: any;
  vueOk: boolean = false;
  allUsers:UserInfo[]=[]
  eventByUserId:EventsPlongee[]=[]
  
  createEvent(eventCreate : CalendarEvent){
      this.apiService.postCreateEvent(eventCreate)
      window.location.reload()
  }
  
  ngOnInit(): void {
    this.user = this.userSessionService.user

    this.getFormation()
    this.getSpeciality()
    this.getSite()
    this.getEvent()
    this.setEvent()
    this.getUsers()
    this.getEventByUserId()

    console.log(this.user)
   }

   setEvent(){
    for (let index = 0; index < this.eventsPlongee.length; index++) {
      let evenements = new EventsPlongee(this.eventsPlongee)
      evenements.id = this.eventsPlongee[index].id
      evenements.title = this.eventsPlongee[index].title
      evenements.instructor = this.eventsPlongee[index].instructor
      evenements.training = this.eventsPlongee[index].training
      evenements.location = this.eventsPlongee[index].location
      evenements.level = this.eventsPlongee[index].level
      evenements.speciality = this.eventsPlongee[index].speciality
      evenements.start = new Date(this.eventsPlongee[index].start)
      evenements.end = new Date(this.eventsPlongee[index].end)
      evenements.color = this.eventsPlongee[index].color
      evenements.draggable = this.eventsPlongee[index].draggable
      evenements.resizable = this.eventsPlongee[index].resizable
      evenements.userId = this.eventsPlongee[index].userId
  
      this.events.push(evenements)
      } 
   }

   getFormation(){
    this.siteDePlongeeService.getFormation()
    .subscribe(
      formations =>{
        this.formations = formations
      }
    ) 
  }

  getSpeciality(){
    this.siteDePlongeeService.getSpeciality()
    .subscribe(
      specialitys =>{
        this.specialitys = specialitys
      }
    )
  }

  getSite(){
    this.siteDePlongeeService.getSite()
    .subscribe(
      sites=>{
        this.sites = sites
      }
    )
  }
  
  getEvent(){
    this.siteDePlongeeService.getEvent()
    .subscribe(
      events=>{
        this.eventsPlongee = events
      }
    )
  }

  getUsers(){
    this.siteDePlongeeService.getUsers()
    .subscribe(
      allUsers =>{
        this.allUsers = allUsers;
      }
    )
  }

  getEventByUserId(){
    this.siteDePlongeeService.getEventByUserId(this.user.userId)
    .subscribe(
      eventByUserId =>{
        this.eventByUserId = eventByUserId
      }
    )
    
  }


 

  
  
}




