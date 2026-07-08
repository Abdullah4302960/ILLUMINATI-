// ======================
// Illuminati v2
// بخش اول
// ======================

// صفحات

function showPage(pageId){

document.querySelectorAll(".page").forEach(function(page){

page.classList.remove("active");

});

let page=document.getElementById(pageId);

if(page){

page.classList.add("active");

}

document.querySelectorAll(".menu button").forEach(function(btn){

btn.classList.remove("active");

});

let active=document.querySelector(
'.menu button[data-page="'+pageId+'"]'
);

if(active){

active.classList.add("active");

}

}



// ======================
// سیستم امتیاز
// ======================

let score=Number(localStorage.getItem("score"))||0;

function saveScore(){

localStorage.setItem("score",score);

updateScore();

}



function updateScore(){

let scoreBox=document.getElementById("user-score");

if(scoreBox){

scoreBox.innerHTML=score+" امتیاز";

}

let profileScore=document.getElementById("profile-score");

if(profileScore){

profileScore.innerHTML=score+" امتیاز";

}

}



function addScore(value){

score+=value;

saveScore();

}



// ======================
// کانال ها
// ======================

const channels=[

{

name:"❤️‍🩹 هیچی Haechy",

link:"https://whatsapp.com/channel/0029Vb83ghH3QxRzgDtZon20"

},

{

name:"📖 Sar Zamine Qessa Ha",

link:"https://whatsapp.com/channel/0029Vb7NT0HBKfi8U61rIj17"

},

{

name:"🕋 ندای ایمان",

link:"https://whatsapp.com/channel/0029Vb7Q858Chq6DfFnIEG2B"

},

{

name:"🌍 General Information",

link:"https://whatsapp.com/channel/0029Vb7YHqND8SDu7Ds9Ym0K"

}

];



function loadChannels(){

let box=document.getElementById("channel-list");

if(!box)return;

box.innerHTML="";

channels.forEach(function(channel){

box.innerHTML+=`

<div class="channel-card">

<h3>${channel.name}</h3>

<button onclick="openChannel('${channel.link}')">

ورود به کانال

</button>

</div>

`;

});

}



function openChannel(link){

window.open(link,"_blank");

addScore(10);

}
// ======================
// پروفایل کاربر
// ======================


function saveName(){

let input=document.getElementById("user-name");

if(!input)return;


let name=input.value.trim();


if(name===""){

alert("لطفاً نام خود را وارد کنید");

return;

}


localStorage.setItem("userName",name);


loadProfile();


alert("✅ نام ذخیره شد");

}



function loadProfile(){

let name=localStorage.getItem("userName") || "کاربر";

let nameBox=document.getElementById("user-name");


if(nameBox){

nameBox.value=name;

}


let profileName=document.getElementById("profile-name");


if(profileName){

profileName.innerHTML=name;

}


updateScore();

}



// ======================
// شناسه کاربر
// ======================


function createUserId(){

let id=localStorage.getItem("userId");


if(!id){

id=Math.random()
.toString(36)
.substring(2,10);


localStorage.setItem(
"userId",
id
);

}


return id;

}



// ======================
// لینک دعوت
// ======================


function createInviteLink(){

let id=createUserId();


let link=
window.location.origin+
window.location.pathname+
"?invite="+id;



let box=document.getElementById("invite-link");


if(box){

box.innerHTML=link;

}


}



function shareInvite(){

let link=
window.location.origin+
window.location.pathname+
"?invite="+createUserId();



if(navigator.share){


navigator.share({

title:"Illuminati",

text:"به ایلومیناتی بپیوندید",

url:link

});


}else{


navigator.clipboard.writeText(link);

alert("لینک دعوت کپی شد");

}

}



// ======================
// بررسی دعوت
// ======================


function checkInvite(){


let params=
new URLSearchParams(
window.location.search
);


let inviter=params.get("invite");



if(inviter){


let used=
localStorage.getItem(
"inviteUsed"
);



if(!used){


addScore(50);


localStorage.setItem(
"inviteUsed",
inviter
);



alert(
"🎉 50 امتیاز دعوت دریافت کردید"
);


}

}


}
// تغییر صفحات اپ

function showPage(pageId){

let pages = document.querySelectorAll(".page");

pages.forEach(function(page){

page.classList.remove("active");

});


let selectedPage = document.getElementById(pageId);


if(selectedPage){

selectedPage.classList.add("active");

}


let buttons = document.querySelectorAll(".menu button");


buttons.forEach(function(btn){

btn.classList.remove("active");

});


}



// سیستم امتیاز

let userScore = localStorage.getItem("score");


if(!userScore){

userScore = 0;

localStorage.setItem("score",userScore);

}



function addScore(amount){

userScore = Number(userScore) + amount;

localStorage.setItem("score",userScore);


let scoreBox = document.getElementById("userScore");


if(scoreBox){

scoreBox.innerText = userScore;

}

}



// سیستم دعوت

function createInvite(){

let link = window.location.href + "?invite=user";


navigator.clipboard.writeText(link);


alert("لینک دعوت شما کپی شد");

}



// بارگذاری اطلاعات کاربر

window.onload=function(){


let scoreBox = document.getElementById("userScore");


if(scoreBox){

scoreBox.innerText = userScore;

}


showPage("home");


}
function showPage(pageId){


let pages = document.querySelectorAll(".page");


pages.forEach(function(page){

page.classList.remove("active");

});


let selected = document.getElementById(pageId);


if(selected){

selected.classList.add("active");

}


}




// امتیاز کاربر

let userScore = localStorage.getItem("userScore");


if(userScore === null){

userScore = 0;

localStorage.setItem("userScore",0);

}



function addScore(number){


userScore = Number(userScore) + number;


localStorage.setItem("userScore",userScore);



let score = document.getElementById("userScore");


if(score){

score.innerText = userScore;

}


}




// لینک دعوت

function createInvite(){


let inviteLink = window.location.href + "?invite=true";


navigator.clipboard.writeText(inviteLink);


alert("لینک دعوت شما کپی شد");


}




// هنگام باز شدن برنامه

window.onload = function(){


let score = document.getElementById("userScore");


if(score){

score.innerText = userScore;

}


showPage("home");


}
// دکمه دریافت امتیاز روزانه

function dailyReward(){

let lastReward = localStorage.getItem("lastReward");

let today = new Date().toDateString();


if(lastReward !== today){


addScore(10);


localStorage.setItem(
"lastReward",
today
);


alert("🎁 ۱۰ امتیاز روزانه دریافت کردی");


}else{


alert("امروز امتیاز خود را دریافت کرده‌ای");


}


}
