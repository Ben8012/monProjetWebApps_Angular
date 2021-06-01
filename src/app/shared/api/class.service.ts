export class Carnets{
    id : number;
    nom:string;
    lieux:string; 
    duree:number;
    profondeur:number;
    temperature_air:number;
    temperature_eau:number;
    deco:boolean;
    type_plongee:string;
    palier:string;
    info:string;
    date:Date;
    carnetId: number;
    carnetInfo:string;
    siteId : number;
  
    constructor(data : any)
    {
    this.id= data.id;
    this.nom = data.nom;
    this.lieux= data.lieux; 
    this.duree = data.duree;
    this.profondeur = data.profondeur;
    this.temperature_air = data.temperature_air;
    this.temperature_eau = data.temperature_eau;
    this.deco = data.deco;
    this.type_plongee = data.type_plongee;
    this.palier = data.palier;
    this.info = data.info;
    this.date = data.date;
    this.carnetId = data.carnetId;
    this.carnetInfo= data.carnetInfo;
    this.siteId = data.siteId;
    }
  }
  
  export class UserInfo
  {
    id:number;
    nom:string;
    prenom:string;
    email:string;
    date_de_naissance:Date;
    lieux_de_naissance:string;
    rue:string;
    numero:number;
    code_postal:number;
    ville:string;
    pays:string;
    niveau: string;
    numero_padi:number;
    nom_assurance:string;
    numero_assurance:string;
  
    constructor(data : any)
    {
      this.id = data.id;
      this.nom = data.nom;
      this.prenom = data.prenom;
      this.email = data.email;
      this.date_de_naissance = data.date_de_naissance;
      this.lieux_de_naissance = data.lieux_de_naissance;
      this.rue = data.rue;
      this.numero = data.numero;
      this.code_postal = data.code_postal;
      this.ville = data.ville;
      this.pays = data.pays;
      this.niveau = data.niveau;
      this.numero_padi = data.numero_padi;
      this.nom_assurance = data.nom_assurance;
      this.numero_assurance = data.numero_assurance;
    }
  }
  
  export class SiteDePlongee
  {
      id: number;
      nom: string;
      plan: string;
      rue: string;
      numero: number;
      code_postal: number;
      ville: string;
      niveau_min: string;
      photo: string;
      info: string;
      site_web:string;
   
      constructor(data: any)
      {
          this.id = data.id;
          this.nom = data.nom;
          this.plan = data.plan;
          this.rue = data.rue;
          this.numero = data.numero;
          this.code_postal = data.code_postal;
          this.ville = data.ville;
          this.niveau_min = data.niveau_min;
          this.photo = data.photo;
          this.info = data.info;
          this.site_web=data.site_web;
      }
  }
  
  export class Formations{
    id: number;
    nom: string;
    duree: string;
    prix: number;
    prerequi: number;
    materiel: string;
    image: string;
    intro: string;
    infos: string;
    lieux: string;
    inclus: string;
    non_inclus: string;
    photo1:string;
    photo2: string;
    photo3: string;
    video:string;
    id_facture: number;
  
    constructor(data: any)
    {
        this.id = data.id;
        this.nom = data.nom;
        this.duree = data.duree;
        this.prix = data.prix;
        this.prerequi = data.prerequi;
        this.materiel = data.materiel;
        this.image = data.image;
        this.intro =data.intro;
        this.infos = data.infos;
        this.lieux = data.lieux;
        this.inclus = data.inclus;
        this.non_inclus = data.non_inclus;
        this.photo1 = data.photo1;
        this.photo2 = data.photo2;
        this.photo3 = data.photo3;
        this.video = data.video;
        this.id_facture = data.id_facture;      
    }
  }
  
  export class Speciality{
    id: number;
    nom: string;
    duree: string;
    prix: number;
    prerequi: number;
    materiel: string;
    image: string;
    intro: string;
    infos: string;
    lieux: string;
    inclus: string;
    non_inclus: string;
    photo1:string;
    photo2: string;
    photo3: string;
    video:string;
    id_facture: number;
  
    constructor(data: any)
    {
        this.id = data.id;
        this.nom = data.nom;
        this.duree = data.duree;
        this.prix = data.prix;
        this.prerequi = data.prerequi;
        this.materiel = data.materiel;
        this.image = data.image;
        this.intro =data.intro;
        this.infos = data.infos;
        this.lieux = data.lieux;
        this.inclus = data.inclus;
        this.non_inclus = data.non_inclus;
        this.photo1 = data.photo1;
        this.photo2 = data.photo2;
        this.photo3 = data.photo3;
        this.video = data.video;
        this.id_facture = data.id_facture;      
    }
  }

  export class EventsPlongee{
    
    id:number;
    title: string;
    instructor: string;
    training: false;
    location:string;
    level:string;
    speciality:string;
    start: Date;
    end: Date;
    color: any;
    draggable: true;
    resizable: {
      beforeStart: true;
      afterEnd: true;
    }
  
    constructor(data : any)
    {
    this.id= data.id;
    this.title = data.title;
    this.instructor= data.instructor; 
    this.training = data.training;
    this.location = data.location;
    this.level = data.level;
    this.speciality = data.speciality;
    this.start = data.start;
    this.end = data.end;
    this.color = data.color;
    this.draggable = data.draggable;
    this.resizable = data.resizable;
    
  }
}