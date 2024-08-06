/*
localStorage.setItem("Do Dsa", " I have to cover all concepts of dsa");
localStorage.setItem("Do OS", " I have to cover all concepts of OS");
localStorage.setItem("Do CN", " I have to cover all concepts of CN");
console.log(localStorage.length);
console.log(localStorage.key(0));
for(let i=0;i<localStorage.length;i++)
{
    console.log(localStorage.key(i),":-",localStorage.getItem(localStorage.key(i)));
}
console.log(localStorage.getItem(localStorage.key(0))) */
// localStorage.clear()
let btn = document.getElementById("btn");

function add_list(){
     let key = document.getElementById("heading").value ;
     let val = document.getElementById("content").value ; 

        if(key != "" && val != "")
        {
           localStorage.setItem(key,val);
        } 

}
btn.addEventListener("click",(evt)=>{
    // evt.preventDefault();
    add_list();
    // display_list();
});




function display_items_list(){
         for(let x=0;x<localStorage.length;x++)
         {
            let key = localStorage.key(x);
            let val = localStorage.getItem(key);

            let main = document.querySelector("#list");
       
            let div = document.createElement("div");
            let head = document.createElement("h3");
            let p = document.createElement("p");
            let i = document.createElement("i");
       
            div.className = 'item';
            head.innerText = `${x+1}) ${key}:`;
            p.innerText = `${val}`;
            i.className = 'fa-solid fa-square-xmark';
        
            div.append(head);
            div.append(p);
            div.append(i);
       
            main.append(div);
         }

}

display_items_list();


let icons = document.querySelectorAll("i");
// let iconsArray = Array.from(icons);
// console.log(iconsArray);
function delete_item(element){
    let itemElement = element.closest('.item');
    // console.log(itemElement);
    if (itemElement) {
        // Extract the content from the <h3> element
        let content = itemElement.querySelector('h3').textContent;
        // console.log(content)
        let key = content.substring(3, content.length - 1);
        // console.log(key);
        // Remove the item from local storage using the key
        localStorage.removeItem(key);
        itemElement.remove();
    }
}


for(let icon of icons)
{
    icon.addEventListener("click", (evt)=>{
        console.log("clicked delete button ");
        delete_item(evt.target);
    })
}