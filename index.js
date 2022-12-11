document.querySelector("form").addEventListener("submit",todo);

function todo(event){
    event.preventDefault();

    let task=document.querySelector("#task").value;
    let priority=document.querySelector("#priority").value;


    let trow=document.createElement("tr");


    let td1=document.createElement("td");
    td1.innerText=task


    let td2=document.createElement("td");
    td2.innerText=priority;
    if(priority==="High"){
        td2.style.backgroundColor="red"
    }else{
        td2.style.backgroundColor="green"
    }


    let td3=document.createElement("td");
    td3.innerText="Delete"
    td3.style.backgroundColor="red"
    td3.style.cursor="pointer"
    td3.addEventListener("click",delte)

    
    trow.append(td1,td2,td3)
    document.querySelector("tbody").append(trow)
}

function delte(event){
    event.target.parentNode.remove();
}