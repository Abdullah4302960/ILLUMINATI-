function showPage(pageId){

let pages = document.querySelectorAll(".page");

pages.forEach(function(page){
    page.classList.remove("active");
});


let buttons = document.querySelectorAll(".menu button");

buttons.forEach(function(btn){
    btn.classList.remove("active");
});


let selected = document.getElementById(pageId);

if(selected){
    selected.classList.add("active");
}


let activeButton = document.querySelector(
    `.menu button[data-page="${pageId}"]`
);


if(activeButton){
    activeButton.classList.add("active");
}


}



const channels = [

{
name:"هیچی Haechy❤️‍🩹",
link:"https://whatsapp.com/channel/0029Vb83ghH3QxRzgDtZon20"
},

{
name:"📖 Sar Zamine Qessa Ha",
link:"https://whatsapp.com/channel/0029Vb7NT0HBKfi8U61rIj17"
},

{
name:"🕋 ﷽ ندای ایمان",
link:"https://whatsapp.com/channel/0029Vb7Q858Chq6DfFnIEG2B"
},

{
name:"🌍 Gₑₙₑᵣₐₗ ₍Iₙfₒᵣₘₐₜᵢₒₙ",
link:"https://whatsapp.com/channel/0029Vb7YHqND8SDu7Ds9Ym0K"
}

];



function loadChannels(){

let box = document.getElementById("channel-list");

if(!box) return;


channels.forEach(function(channel){


let card = document.createElement("div");

card.className="channel-card";


card.innerHTML = `

<h3>${channel.name}</h3>

<button onclick="openChannel('${channel.link}')">

ورود به کانال

</button>

`;


box.appendChild(card);


});

}




function openChannel(link){

window.open(link,"_blank");

}




function shareInvite(){

if(navigator.share){

navigator.share({

title:"ایلومیناتی | Illuminati",

text:"به شبکه ایلومیناتی بپیوندید",

url:window.location.href

});

}else{

alert("لینک دعوت آماده اشتراک‌ گذاری است");

}

}




document.addEventListener("DOMContentLoaded", function(){

let box = document.getElementById("channel-list");

if(box){

box.innerHTML = "";

loadChannels();

}

});
// سیستم امتیاز

let userScore = localStorage.getItem("userScore");


if(userScore === null){

userScore = 0;

localStorage.setItem("userScore", userScore);

}



// نمایش امتیاز

function updateScore(){

let scoreBox = document.getElementById("user-score");


if(scoreBox){

scoreBox.innerHTML = userScore + " امتیاز";

}

}



// اضافه کردن امتیاز

function addScore(amount){

userScore = Number(userScore) + amount;

localStorage.setItem("userScore", userScore);

updateScore();

}



// امتیاز ورود روزانه

document.addEventListener("DOMContentLoaded", function(){

updateScore();

});
function dailyScore(){

addScore(5);

alert("🎉 5 امتیاز برای ورود روزانه دریافت کردید");

}


function channelScore(){

addScore(10);

alert("📚 10 امتیاز برای حمایت از کانال‌ ها دریافت کردید");

}


function inviteScore(){

addScore(50);

alert("👥 50 امتیاز دعوت به حساب شما اضافه شد");

}
function dailyScore(){

let today = new Date().toDateString();

let lastDaily = localStorage.getItem("dailyScoreDate");


if(lastDaily === today){

alert("⏳ امتیاز روزانه را امروز دریافت کرده‌اید");

return;

}


addScore(5);

localStorage.setItem("dailyScoreDate", today);


alert("🎉 5 امتیاز ورود روزانه دریافت کردید");

}
