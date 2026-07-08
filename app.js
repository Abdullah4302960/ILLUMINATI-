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
`.menu button[onclick="showPage('${pageId}')"]`
);

if(activeButton){

activeButton.classList.add("active");

}

}

const channels = [

{
name:" هیچی Haechy❤️‍🩹",
link:"https://whatsapp.com/channel/0029Vb83ghH3QxRzgDtZon20"
},

{
name:"📖 Sar Zamine Qessa Ha",
link:"https://whatsapp.com/channel/0029Vb7NT0HBKfi8U61rIj17"
},

{
name:"🕋 ﷽ ندای ایمان ",
link:"https://whatsapp.com/channel/0029Vb7Q858Chq6DfFnIEG2B"
},

{
name:"🌍 Gₑₙₑᵣₐₗ ₍Iₙfₒᵣₘₐₜᵢₒₙ",
link:"https://whatsapp.com/channel/0029Vb7YHqND8SDu7Ds9Ym0K"
}

];

function loadChannels(){

let box = document.getElementById("channel-list");

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
  
}


function openChannel(link){

window.open(link,"_blank");

}

document.addEventListener("DOMContentLoaded", function(){

let box = document.getElementById("channel-list");

if(box){
box.innerHTML = "";
loadChannels();
}

});
function showInviteInfo(type){

if(type==="link"){

alert("🔗 لینک دعوت ایلومیناتی آماده است.\n\nدوستان خود را دعوت کنید و امتیاز کسب نمایید.");

}

if(type==="stats"){

alert("⭐ آمار دعوت شما:\n\nتعداد دعوت موفق: 0\nامتیاز: 0");

}

if(type==="points"){

alert("🎁 روش‌ های کسب امتیاز:\n\n📢 دعوت دوستان\n❤️ حمایت از کانال‌ ها\n⭐ فعالیت در برنامه");

}

}
