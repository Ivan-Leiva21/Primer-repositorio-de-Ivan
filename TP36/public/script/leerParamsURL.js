console.log("leerParamsURL");

let url = window.location;
console.log(url.search);

let params = new URLSearchParams(url.search);
console.log(params.get("error"));
console.log(params.has("error"));

if(params.has("error")){
    document.querySelector("#error").innerHTML += params.get("error");
    document.querySelector("#error").style.display = "block";
    timeOutPop();
}

if(params.has("msg")){
    document.querySelector("#msg").innerHTML += params.get("msg");
    document.querySelector("#msg").style.display = "block";
    timeOutPop();
}

document.querySelectorAll(".pop").forEach(pop => {
    pop.addEventListener("click", (e)=>{
        e.target.style.display = "none"; 
        e.target.innerHTML = "";
    })
})

function timeOutPop(){
    setTimeout(()=>{
        document.querySelectorAll(".pop").forEach(pop =>{
            pop.style.display = "none";
            pop.innerHTML = "";
        })
    }, 3000)
}
