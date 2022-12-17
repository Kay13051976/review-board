const userdata = [
    {
        name:"Joe Hancock",
        job:"Manager",
        text:"nice place, decent price, big carpark",
        image:"https://randomuser.me/api/portraits/men/14.jpg"
    },
     {
        name:"Pat Hummus",
        job:"Shop Keeper",
        text:"nice and clean, plenty of carpark, cheap price",
        image:"https://randomuser.me/api/portraits/women/29.jpg"
    },
     {
        name:"Hamza Wares",
        job:"Fabric Inspector",
        text:"delicious food, good price, big space",
        image:"https://randomuser.me/api/portraits/men/20.jpg"
    },
     {
        name:"Bill Warren",
        job:"Supervisor",
        text:"too busy, big gap waiting for main course",
        image:"https://randomuser.me/api/portraits/men/59.jpg"
    },
     {
        name:"Jame Biden",
        job:"Programmer",
        text:"nice restaurant, good food, good service",
        image:"https://randomuser.me/api/portraits/men/7.jpg"
    },
     {
        name:"Paula berk",
        job:"Retailer",
        text:"big carpark, good meal in a decent price",
        image:"https://randomuser.me/api/portraits/women/0.jpg"
    }
]
const review = document.querySelector('.review');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.user-name');

const userJob = document.querySelector('.user-job');

let activeIndex = 0; 

function showReview(){
    const {name,job,text,image} = userdata[activeIndex];
    review.innerHTML=text;
    userImage.src=image;
    userName.innerHTML=name;
    userJob.innerHTML=job;
    activeIndex++;
    if(activeIndex>userdata.length-1){
        activeIndex=0;
    }
}
setInterval(showReview,10000);