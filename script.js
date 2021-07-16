let list = document.querySelector("#list")

let form = document.querySelector("#form")

let a = "what"


form.addEventListener("submit",addItem)
list.addEventListener("click",removeItem)


function addItem(e){
    e.preventDefault();
    
    //take input
    let input = document.querySelector("#input").value;
    //create new list <li><button></button></li>
    let newItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = input;
    newItem.appendChild(button);
    list.appendChild(newItem);
    document.querySelector("#input").value = null;
}

function removeItem(e){

    e.target.innerHTML = e.target.innerHTML.strike();

    setTimeout(() => {
        list.removeChild(e.target.parentElement)
    }, 1000);
    
}