// اطلاعات کاربر

let userData = {

name: "کاربر جدید",

score: 0,

invites: 0,

level: "تازه وارد"

};




// ذخیره اطلاعات

function saveUser(){


localStorage.setItem(
"userData",
JSON.stringify(userData)
);


}




// دریافت اطلاعات

function loadUser(){


let data = localStorage.getItem("userData");


if(data){


userData = JSON.parse(data);


}


}




// اضافه کردن امتیاز

function increaseScore(amount){


userData.score += amount;


saveUser();


updateProfile();


}




// اضافه کردن دعوت

function increaseInvite(){


userData.invites++;


increaseScore(100);


}




// بروزرسانی پروفایل

function updateProfile(){


let score = document.getElementById("userScore");


if(score){

score.innerText = userData.score;

}


}




loadUser();

updateProfile();
