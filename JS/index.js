const homeInfo = [
    {
        header1: "Hi Welcome", 
        header2: "I'm Victor Yegon",
        paragraph1: "I'm a Software Engineer based in Nairobi, kenya",
    },
    {
        header1: "Hi Welcome", 
        header2: "I'm Victor Yegon",
        paragraph1: "I'm a Software Developer based in Nairobi, Kenya",
    },
    {
        header1: "Hi Welcome", 
        header2: "I'm Victor Yegon",
        paragraph1: "I'm a Database Manager based in Nairobi kenya",
    }
]

const header3El = document.querySelector("h3");
const header2El = document.querySelector("h2");
const paragraphEl = document.querySelector("p");

let idx = 0;

updateHomeInfo ();

function updateHomeInfo(){
    const {header1, header2, paragraph1} = homeInfo[idx];
    header3El.innerText = header1;
    header2El.innerText = header2;
    paragraphEl.innerText = paragraph1;
    idx++;

    if (idx === homeInfo.length){
        idx = 0;    
    }
    setTimeout(()=>{
        updateHomeInfo();
    }, 4000)
}



// const homeBodyEl = document.querySelector(".info-container");
// const homeInfoEl = document.querySelectorAll(".home-container");

// let currentInfo = 1;

// let timeOut;

// updateInfo();

// function updateInfo(){
//     if(currentInfo > homeInfoEl.length){
//         currentInfo = 1;
//     }else if(currentInfo < 1){
//         currentInfo = homeInfoEl.length;
//     }
//     homeBodyEl.style.transform = 
//     `translateX(${(currentInfo - 1)* -600}px)`;

//     timeOut = setTimeout(()=>{
//         currentInfo++;
//         updateInfo();
//     }, 3000)
// }
