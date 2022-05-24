"use strict";

class Get {
  constructor() {} //read from web service


  getMenu(url) {
    //do a FETCH call
    fetch(url) //PROMISE (.then), do this with it: response 
    .then(response => {
      //do a control to check if 200
      if (response.status != 200) {
        //anything else then OK or 200, return
        return;
      } //on 200, do this with JSON data


      return response.json() //response from web service sent to another function to print
      //response.json() becomes data
      .then(data => writeMenu(data)) //at error, do this
      .catch(err => console.log(err));
    }); //print out course on page

    function writeMenu(dataSQL) {
      //get DOM element with ul list
      //            const starterEl = document.getElementById("starter");
      //clear list
      //            starterEl.innerHTML = "";
      //loop through each JS-object in the array from data 
      //with forEach & write the list in DOM
      dataSQL.forEach(menu => {
        if (menu.menu_name == 'starter') {
          //get DOM element with ul list
          const starterEl = document.getElementById("starter");
          starterEl.innerHTML += `<li class="menulist" id="${menu.id}"> ${menu.item_name}  (#${menu.id}) - pris: ${menu.price} kr </li>`;
        }

        if (menu.menu_name == 'main') {
          const mainEl = document.getElementById("main");
          mainEl.innerHTML += `<li class="menulist" id="${menu.id}"> ${menu.item_name}  (#${menu.id}) - pris: ${menu.price} kr</li>`;
        }

        if (menu.menu_name == 'desert') {
          const desertEl = document.getElementById("desert");
          desertEl.innerHTML += `<li class="menulist" id="${menu.id}"> ${menu.item_name}  (#${menu.id}) - pris: ${menu.price} kr</li>`;
        }

        if (menu.menu_name == 'drink') {
          const drinkEl = document.getElementById("drink");
          drinkEl.innerHTML += `<li class="menulist" id="${menu.id}"> ${menu.item_name}  (#${menu.id}) - pris: ${menu.price} kr</li>`;
        }

        if (menu.menu_name == 'other') {
          const otherEl = document.getElementById("other");
          otherEl.innerHTML += `<li class="menulist" id="${menu.id}"> ${menu.item_name}  (#${menu.id}) - pris: ${menu.price} kr</li>`;
        }
      });
    }
  }

} //export to use it elsewhere


export default Get;