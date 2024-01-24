const homeInfo = [
    {
        // header1: "Hi,", 
        header2: "I'm Victor Yegon",
        paragraph1: "a Software Engineer",
        paragraph2: "based in Nairobi, Kenya",
    },
    {
        // header1: "", 
        header2: "I'm Victor Yegon",
        paragraph1: "a Fullstack Software Developer",
        paragraph2: "based in Nairobi, Kenya",
    },
    {
        // header1: "Hi,  Welcome to my world", 
        header2: "I'm Victor Yegon",
        paragraph1: "a Database Administrator",
        paragraph2: "based in Nairobi, Kenya",
    },
    {
        // header1: "Hi,  Welcome to my world", 
        header2: "I'm Victor Yegon",
        paragraph1: "a UI/UX Designer",
        paragraph2: "based in Nairobi, Kenya",
    },
    {
        // header1: "Hi,  Welcome to my world", 
        header2: "I'm Victor Yegon",
        paragraph1: "a QA Tester",
        paragraph2: "based in Nairobi, Kenya",
    }
]

// const header3El = document.querySelector("h3");
const header2El = document.querySelector("h2");
const paragraph1El = document.querySelector(".pc1");
const paragraph2El = document.querySelector(".pc2");

let idx = 0;

updateHomeInfo ();

function updateHomeInfo(){
    const {header1, header2, paragraph1, paragraph2} = homeInfo[idx];
    header3El.innerText = header1;
    header2El.innerText = header2;
    paragraph1El.innerText = paragraph1;
    paragraph2El.innerText = paragraph2;
    idx++;

    if (idx === homeInfo.length){
        idx = 0;    
    }
    setTimeout(()=>{
        updateHomeInfo();
    }, 20000)
}

