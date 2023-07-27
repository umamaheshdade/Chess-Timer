
let inputtime = document.getElementById("input1");
let startbtn = document.getElementById("startbutton");
let timer1 = document.getElementById("timer1");
let timer2 = document.getElementById("timer2");
let heading1 = document.getElementById("heading1");
let title = document.getElementById("title");
let twotimers = document.getElementById("timers");
let container1 = document.getElementById("container1");

let t1min = document.getElementById("t1mintues");
let t2min = document.getElementById("t2mintues");
let t1sec = document.getElementById("t1seconds");
let t2sec = document.getElementById("t2seconds");

let z = 0; // This for the intial control of the timers before setting the time...

startbtn.onclick= function(){
    let a = parseInt(inputtime.value);
    if (a>0 && a<1000){
        t1min.textContent=""+a;
        t2min.textContent=""+a;
        container1.removeChild(startbtn);
        container1.removeChild(inputtime);
        container1.removeChild(heading1);
        title.style.fontSize="15px";
        title.textContent="Who choose blacks they will click their own timer to start the whites timer";
        timer1.style.height="150px";
        timer2.style.height="150px";
        timer1.style.width="150px";
        timer2.style.width="150px";

        twotimers.classList.remove("timers1");
        twotimers.classList.add("timers2");

        z+=1;

    }
    else {
        alert("Enter valid TIME");
    }
    
}


let id1=null;  //use this id's always globally ...don't make local ..
let id2=null;

let tc1=true; //used to control the misbehaviour of click event(double click event...)
let tc2=true;

timer1.addEventListener("click",()=>{

    if (tc2 && z!==0 ){
        tc2=false; // if tc2 timer becomes false then it stops the double clicking evnet and reducing the time of the timer2.......
        tc1=true;  //giving access to the timer1 to reduce the timer 1...
        clearInterval(id1);
        timer2.style.backgroundColor="green";
        timer1.style.backgroundColor="black";

        let x2 = parseInt(t2min.textContent);
        let y2 = parseInt(t2sec.textContent);

        id2 = setInterval(() => {   //once you click on the timer1 and timer2 time reduces...
            
            if(x2===0 && y2===0){
                timer2.style.backgroundColor="red";
                
                clearInterval(id2);
                clearInterval(id1);

                container1.appendChild(startbtn);
                startbtn.textContent="Play Again";

                startbtn.onclick=function(){
                    location.reload();      //reload the page ....where we start..
                }
                
            }
            else if (y2===0 && x2!==0){
                x2-=1;
                y2=59;
                if (x2>10){
                    t2min.textContent=""+x2;
                    t2sec.textContent=""+y2;
                }
                else {
                    t2min.textContent="0"+x2;
                    t2sec.textContent=""+y2;
                } 
            }
            else {
                y2-=1;
                if (y2<10){
                    t2sec.textContent="0"+y2;
                }
                else {
                    t2sec.textContent=""+y2;
                }                
            }
        }, 1000);
    }
}
);

timer2.addEventListener("click",()=>{
   
    if(tc1 && z!==0){
        tc1=false; //same happening here like timer1....
        tc2=true;   // giving access to timer1 to reduce it's time......
        clearInterval(id2);
        timer1.style.backgroundColor="green";
        timer2.style.backgroundColor="black";

        let x = parseInt(t1min.textContent);
        let y = parseInt(t1sec.textContent);

        id1 = setInterval(() => { //same as timer 1...
            
        if(x===0 && y===0){
            timer1.style.backgroundColor="red";
            clearInterval(id1);
            clearInterval(id2);

            container1.appendChild(startbtn);
            startbtn.textContent="Play Again";
            startbtn.onclick=function(){
                location.reload();
            }

            
        }
        else if (y===0 && x!==0){
            x-=1;
            y=59;
            if (x>10){
                t1min.textContent=""+x;
                t1sec.textContent=""+y;
            }
            else {
                t1min.textContent="0"+x;
                t1sec.textContent=""+y;
            }
        }
        else {
            y-=1;
            if (y<10){
                t1sec.textContent="0"+y;
            }
            else {
                t1sec.textContent=""+y;
            }
            
        }
        }, 1000);
    }
}
);
