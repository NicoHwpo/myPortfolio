// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */

async function fetchInfo() {
    const response = await fetch('/form-handler');
    const nameListHtml = await response.text();
    document.getElementById('info-list').innerHTML = nameListHtml;
  }

async function addMessages() {
    const responseFromServer = await fetch('/messages');
    const messages = await responseFromServer.json();
    // Add it to the page.
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = messages;
  }


async function addRandomQuote() {
  const responseFromServer = await fetch('/json');
  const quotes = await responseFromServer.json();
  // Pick a random greeting.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerHTML = quote;
}

async function showServerTime() {
    const responseFromServer = await fetch('/date');
    const textFromResponse = await responseFromServer.text();
  
    const dateContainer = document.getElementById('date-container');
    dateContainer.innerText = textFromResponse;
  }
  


window.addEventListener("scroll", function(){
    const logoImage = document.querySelector(".logo img");
    const mainNav = document.getElementById("mainNav");
    const sideNav = document.getElementById("sidenav")
    const alert = document.getElementById("alert");

    if(window.pageYOffset > 0){
        logoImage.style.height ="64px";
        sideNav.style.marginTop = "60px";
        //alert.style.marginTop = "64px";
        document.getElementById("LogoN").src = "images/logos/logofb.png";
        document.getElementById("insta").src = "images/logos/inst.png";
        document.getElementById("linke").src = "images/logos/lin.png";
        document.getElementById("spot").src = "images/logos/spot.png";
        document.getElementById("disc").src = "images/logos/discord.png";
        document.getElementById("gmail").src = "images/logos/gmail.png";
        document.getElementById("git").src = "images/logos/git.png";
        mainNav.classList.add("bg-black");
        mainNav.classList.add("txt-white");
        sideNav.classList.add("bg-black");

    }
    else{
        logoImage.style.height = "84px";
        sideNav.style.marginTop = "80px";
        //alert.style.marginTop = "84px";
        document.getElementById("LogoN").src = "images/logos/logofn.png";
        document.getElementById("insta").src = "images/logos/instN.png";
        document.getElementById("linke").src = "images/logos/linN.png";
        document.getElementById("spot").src = "images/logos/spotN.png";
        document.getElementById("disc").src = "images/logos/discordN.png";
        document.getElementById("gmail").src = "images/logos/gmailN.png";
        document.getElementById("git").src = "images/logos/gitN.png";
        mainNav.classList.remove("bg-black");
        mainNav.classList.remove("txt-white");
        sideNav.classList.remove("bg-black");

    }

})

function opacity() {
    document.getElementById("cont").style.opacity = "1";
}

function ClearFields() {

    document.getElementById("uname").value = "";
    document.getElementById("textfield2").value = "";
}

function myAge() {
    var anoHoy = new Date().getFullYear();
    
    var x = document.getElementById("myage").value;
    var anosvivos = anoHoy - x;
    if(anosvivos == anoHoy){
        document.getElementById("demo").innerHTML = "Enter your real age LOL";
    }else if(x == "19"){
        document.getElementById("demo").innerHTML = anosvivos + "... Really? Same!";
    }else if(x >= "25"){
        document.getElementById("demo").innerHTML = anosvivos + "... :0 you're a grown up!";
    }else if(x <= "14"){
        document.getElementById("demo").innerHTML = anosvivos + "... :0 you're just a kid!";
    }else{
        document.getElementById("demo").innerHTML = anosvivos;
    }
    
  }

