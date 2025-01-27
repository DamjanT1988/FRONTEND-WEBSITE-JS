//--PROGRAMMER: DAMJAN TOSIC, DATO1700@MIUN.STUDENT.SE---//
"use strict";

import Post from './CLASSES/post.js';
import Get from './CLASSES/get.js';
let post = new Post();
let get = new Get(); //---CONTACT FORM POST
//control if on right page

let urlContact = window.location.pathname;
let filenameContact = urlContact.substring(urlContact.lastIndexOf('/') + 1);

if (filenameContact == "contact.html") {
  post.createContactInfo('nameguest', 'emailguest', 'contentguest', 'http://studenter.miun.se/~dato1700/writeable/dt173g/project/projekt_webservice_vt22-DamjanT1988/webservice-API.php?idcontact=post');
} //---TABLE
//control if on right page


let urlTableGet = window.location.pathname;
let filenameTableGet = urlTableGet.substring(urlTableGet.lastIndexOf('/') + 1);

if (filenameTableGet = "bookings.html") {
  get.getTable('http://studenter.miun.se/~dato1700/writeable/dt173g/project/projekt_webservice_vt22-DamjanT1988/webservice-API.php?idorder=orderall');
} //---MENU
//control if on right page


let urlMenu = window.location.pathname;
let filenameMenu = urlMenu.substring(urlMenu.lastIndexOf('/') + 1);

if (filenameMenu == "menu.html") {
  get.getMenu('http://studenter.miun.se/~dato1700/writeable/dt173g/project/projekt_webservice_vt22-DamjanT1988/webservice-API.php?idmenu=menuall');
} //control if on right page


let urlTable = window.location.pathname;
let filenameTable = urlTable.substring(urlTable.lastIndexOf('/') + 1);

if (filenameTable == "bookings.html") {
  post.createOrder('nametable', 'phonetable', 'tabletable', 'datetable', 'timetable', 'messagetable', 'typetable', 'arrivaltable', 'costtable', 'http://studenter.miun.se/~dato1700/writeable/dt173g/project/projekt_webservice_vt22-DamjanT1988/webservice-API.php?idorder=post');
} //control if on right page


let urlTakeaway = window.location.pathname;
let filenameTakeaway = urlTakeaway.substring(urlTakeaway.lastIndexOf('/') + 1);

if (filenameTakeaway == "takeaways.html") {
  post.createOrder('nametable', 'phonetable', 'tabletable', 'datetable', 'timetable', 'messagetable', 'typetable', 'arrivaltable', 'costtable', 'http://studenter.miun.se/~dato1700/writeable/dt173g/project/projekt_webservice_vt22-DamjanT1988/webservice-API.php?idorder=post');
}