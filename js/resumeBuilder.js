/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
   "name":"Alex Celso",
   "role":"Desenvolvedor Web",
   "contacts":{
       "mobile":"(48)99822-8819",
       "email":"alexmcmc@hotmail.com",
       "github":"alexmcmc",
       "twitter":"@alexmcmc1",
       "location":"Palhoça"
   },
   "welcomeMessage":"Ola seja bem vindo ao meu currículo online",
   "skills":["WordPress", "HTML/5", "CSS/3", "BootStrap", "Php", "jQuary", "javaScript", "Sql", "MySql"],
   "bioPic":"images/alex.jpg"
};

var education = {
    "schools":[
        {
          "name" : "Estácio de Sá",
          "location" : "São José, SC",
          "degree" : "Técnologo",
          "major" : "ADS",
          "date" : 2015,
          "url" : "http://portal.estacio.br/"
        }
    ],
    "onlineCourses":[
        {
          "school" : "UpInside",
          "title" : "Php, jQuary",
          "date" : 2016,
          "url" : "https://www.upinside.com.br/"
        },
        {
          "school" : "Senai",
          "title" : "Php, Html, Css",
          "date" : 2014,
          "url" : "https://sc.senai.br/"
        },
        {
          "school" : "Udacity",
          "title" : "Html, jQuary,..",
          "date" : 2017,
          "url" : "https://www.udacity.com/"
        }
    ]
};

var work = {
    "jobs":[
        {
          "employer" : "AytyCrm",
          "title" : "Estágiario",
          "location" : "Florianópolis SC",
          "date" : "2014",
          "description" : "Elaborar testes, criar relatórios, Scruns, Treinamentos e Documentações"
        },
        {
          "employer" : "QST",
          "title" : "Técnico de Suporte ",
          "location" : "Florianópolis SC",
          "date" : "2013 a 2014",
          "description" : "Realizar manutenção de redes, computadores, impressoras e telefonia dar suporte ao usuários  em execução de sistemas "
        },
        {
          "employer" : "Lcon",
          "title" : "Socio",
          "location" : "Palhoça SC",
          "date" : "2004 a 2012",
          "description" : "Motorista de funcionarios e equipamento, manutenção de equipamentos"
        }
    ]
};

var projects = {
    "projects" : [
    {
       "title" : "Site para apresentar Empresa",
       "date" : "2015",
       "description" : "Site simple para apresentar a empresa essa site seria temporários pois estariam elaborando um sistema conpleto",
       "images" : ["images/197x148.gif", "images/197x148.gif"],
       "url" : "http://www.lconlimpeza.com/"
    }    
]
};

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#topContacts").append(HTMLcontactGeneric.replace("%contact%", "E-mail").replace("%data%", bio.contacts.email));


if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(skills in bio.skills){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skills]);
   
    $("#skills").append(formattedSkill);
}
}
function diplaywork(){
    for(job in work.jobs){
     $("#workExperience").append(HTMLworkStart);
     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
     var formattedEmployerTitle = formattedEmployer + formattedTitle;
     $(".work-entry:last").append(formattedEmployerTitle);
     var formattedLocal = HTMLworkLocation.replace("%data%", work.jobs[job].location);
     $(".work-entry:last").append(formattedLocal)
     var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
     $(".work-entry:last").append(formattedDate);
     var formattedDescricao = HTMLworkDescription.replace("%data%", work.jobs[job].description);
     $(".work-entry:last").append(formattedDescricao);
    }
}
diplaywork();


function inName(name){
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}
//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

projects.display = function(){
    for(project in projects.projects){
     $("#projects").append(HTMLprojectStart);
     var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
     $(".project-entry:last").append(formattedTitle);
     var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
     $(".project-entry:last").append(formattedDate);
     var formattedDescricao = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
     $(".project-entry:last").append(formattedDescricao);
         if(projects.projects[project].images.length > 0 ){
             for(img in projects.projects[project].images){
             var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
             $(".project-entry:last").append(formattedImage);
         }
       }
    }
};
projects.display();


education.diplay = function(){
    for(educat in education.schools){
     $("#education").append(HTMLschoolStart);
     var formattedName = HTMLschoolName.replace("%data%", education.schools[educat].name);
     var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[educat].degree);
     var formattedTitle = formattedName + formattedDegree;
     $(".education-entry:last").append(formattedTitle);
     var formattedDates = HTMLschoolDates.replace("%data%", education.schools[educat].date);
     $(".education-entry:last").append(formattedDates);
     var formattedLocal = HTMLschoolLocation.replace("%data%", education.schools[educat].location);
     $(".education-entry:last").append(formattedLocal);
     var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[educat].major);
     $(".education-entry:last").append(formattedMajor);
 }
        $("#education").append(HTMLonlineClasses);
        for(curse in education.onlineCourses){
         $("#education").append(HTMLschoolStart);
         var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[curse].school);
         var formattedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[curse].title);
         var formattedTitleSchool = formattedtitle + formattedSchool;
         $(".education-entry:last").append(formattedTitleSchool);
         var formattedates = HTMLonlineDates.replace("%data%", education.onlineCourses[curse].date);
         $(".education-entry:last").append(formattedates);
         var formatteurl = HTMLonlineURL.replace("%data%", education.onlineCourses[curse].url);
         $(".education-entry:last").append(formatteurl);
        }
   
};

education.diplay();
