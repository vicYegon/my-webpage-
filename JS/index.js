const homeBodyEl = document.querySelector(".home_body");
const homeInfoEl = document.querySelectorAll(".home_info");

let currentInfo = 1;

let timeOut;

updateInfo();

function updateInfo(){
    if(currentInfo > homeInfoEl.length){
        currentInfo = 1;
    }else if(currentInfo < 1){
        currentInfo = homeInfoEl.length;
    }
    homeBodyEl.style.transform = 
    `translateX(${(currentInfo - 1)* -600}px)`;

    timeOut = setTimeout(()=>{
        currentInfo++;
        updateInfo();
    }, 3000)
}