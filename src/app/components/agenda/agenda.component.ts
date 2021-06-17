import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
import { startOfDay, endOfDay, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView,} from 'angular-calendar';
import { FlatpickrDefaultsInterface } from 'angularx-flatpickr/flatpickr-defaults.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteDePlongeeService } from '../../shared/api/api.service';
import { EventsPlongee, Formations, SiteDePlongee, Speciality, UserInfo, UserEvent } from '../../shared/class/class.service';
import { ChangeDetectorRef } from '@angular/core';
import { UserSessionService } from '../../shared/user_session/user-session.service';


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

  constructor(private modal: NgbModal,
            private apiService : SiteDePlongeeService,
            private formBuilder : FormBuilder,
            private router:Router,
            private siteDePlongeeService:SiteDePlongeeService,
            private route : ActivatedRoute,
            private ref: ChangeDetectorRef,
            public userSessionService : UserSessionService,) 
  {
    this.OneProfile = this.route.snapshot.data["datas2"]
    this.eventsPlongee = this.route.snapshot.data["datas1"]

    this.formations = this.route.snapshot.data["data"][0]
    this.specialitys = this.route.snapshot.data["data"][1]
    this.sites = this.route.snapshot.data["data"][2]
  }


  ngOnInit(): void {
    this.user = this.userSessionService.user

    this.setEvent()
    this.getUsers()
    this.getUserEvent()
   }



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
          instructor: "",
          userId: 0,
          training : false,
          speciality:"",
          level:"",
          prix: 0,
          location:"",
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
    this.participants=[]
    this.vueParticipant = true
    this.modal.open(this.modalContent, { size: 'lg' });
  }


  
  addEvent(): void {
    this.events = [
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
        prix:'',
      },
      ...this.events,
    ];
    
  }



  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete); 
    if(eventToDelete.id){
      this.apiService.deleteEvent(eventToDelete.id)
    }else{
      alert("vous essayez de supprimer un evenement qui n'existe pas")
    }
  }
  
  updateEvent(eventToUpdate: CalendarEvent) {
    if(eventToUpdate.id){
      this.apiService.postUpdateEvent(eventToUpdate)
    }else{
      alert("vous essayez de de modifier un evenement qui n'existe pas")
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

//mon code

  formations:Formations[]=[]
  specialitys:Speciality[]=[]
  sites:SiteDePlongee[]=[]
  eventsPlongee:EventsPlongee[]=[]
  training:boolean=false
  user: any
  allUsers:UserInfo[]=[]
  eventByUserId:EventsPlongee[]=[]
  dataEnvoisEmail:any
  userEvent:UserEvent[]=[]
  
 

  createEvent(events : CalendarEvent){
    if(events.title && events.instructor && events.prix && events.start && events.end ){
      
      events.start.setDate((events.start.getDate() + 1))
      events.end.setDate((events.end.getDate() + 1))
      this.apiService.postCreateEvent(events)
      window.location.reload()
    }else{
      alert("Vous devez remplir touts les champs pour créer l'évenement")
    }
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
      evenements.prix = this.eventsPlongee[index].prix
  
      this.events.push(evenements)
      } 
    }

  userEventId:any
  existe:boolean=false
  
  participe(eventId: any, userId:any){
  
    for (let index = 0; index < this.userEvent.length; index++) {
      if(this.userEvent[index].id_evenement == eventId && this.userEvent[index].id_utilisateur == userId){
        alert('participe deja')
        this.existe=true
      }
    }
    if(!this.existe){
      this.userEventId={
          eventId:eventId,
          userId:userId
        }
        this.apiService.postCreateUserEvent(this.userEventId)

        /*for (let index = 0; index < this.events.length; index++) {
          if(this.events[index].id == eventId){
            this.dataEnvoisEmail = this.events[index];
          }  
        }
        this.apiService.postEnvoisMail(this.dataEnvoisEmail)*/
        this.existe=!this.existe
        window.location.reload()
        //this.router.navigate(['/app-agenda']);
    } 
  }


  deleteId:any

  participePas(eventId: any, userId:any){
  for (let index = 0; index < this.userEvent.length; index++) {
    if(this.userEvent[index].id_evenement==eventId && this.userEvent[index].id_utilisateur==userId){
    this.deleteId=this.userEvent[index].id
    }
  }
  this.apiService.deleteUserEvent( this.deleteId)
  window.location.reload()
  }

  eventUserId:any
  participants:UserInfo[]=[]
  vueParticipant:boolean=true
  jeParticipe:boolean=false

  voirParticipant(eventId: any, userId:any)
  {
    if(this.vueParticipant)
    {
      for (let index = 0; index < this.userEvent.length; index++)
      {
        if (this.userEvent[index].id_evenement === eventId)
        {
          this.eventUserId = this.userEvent[index].id_utilisateur
          for (let indexx = 0; indexx < this.allUsers.length; indexx++)
          {
            if (this.allUsers[indexx].id === this.eventUserId)
            {
              this.participants.push(this.allUsers[indexx])
            }
          }
        }
      }

      this.vueParticipant=!this.vueParticipant
    }else{
      this.participants=[]
      this.vueParticipant=!this.vueParticipant
    }

    /*for (let index = 0; index < this.participants.length; index++) {
      if( this.participants[index]==this.user.name){
        this.jeParticipe=true
      }  
    }
    console.log(this.participants)
    console.log(this.user)*/
  }
   


  getUsers(){
    this.siteDePlongeeService.getUsers()
    .subscribe(
      allUsers =>{
        this.allUsers = allUsers;
      }
    )
  }

  getUserEvent(){
    this.siteDePlongeeService.getUserEvent()
    .subscribe(
      userEvent =>{
        this.userEvent = userEvent
      }
    )   
  }
 
}