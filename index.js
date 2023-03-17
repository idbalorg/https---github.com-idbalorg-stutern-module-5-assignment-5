const addButton = document.querySelector("#enter");
const myLists = document.querySelector("#toDoLists");
const deleteItem = document.querySelector("#deleteButton");

// to add event listener to the enter button such that when clicked, it will add the text area content to the list

function pushList(){
    const textBoxContent = document.querySelector("#textArea").value.trim(); // defines the text area, the trim() method removes every trace of white space from both ends of the string in the text area

    if (textBoxContent !== ""){
        const newRadio = document.createElement("input"); // this creates an html input element, it is named newRadio
        newRadio.setAttribute("type", "radio") // this add a radio attribute to the newRadio const
        newRadio.setAttribute("class", "clicked") // this also add an ID attribute to the radio newRadio input element
        myLists.appendChild(newRadio); // this append the newRadio html tag creadted earlier as a child to the unordered list UL #toDoList
        

        const newList = document.createElement("label"); // it creates a list LI html element and named it newList
        newList.setAttribute("class", "clickedList"); // it adds ID attribute to newList above
        myLists.appendChild(newList);   // it adds the list created to myList
        newList.innerHTML = textBoxContent; //this sets the newlist text content to the value in the text area
        

        const breaks = document.createElement("br");
        myLists.appendChild(breaks);

        myLists.insertBefore(breaks, myLists.childNodes[0]);
        myLists.insertBefore(newList, myLists.childNodes[0]);
        myLists.insertBefore(newRadio, myLists.childNodes[0]);
        document.querySelector("#textArea").value= "" ; // this returns the text area back to an empty area

        const toDoItem = {content : textBoxContent};
        localStorage.setItem(JSON.stringify(toDoItem));


    }
}
addButton.addEventListener("click", pushList)
document.getElementById("textArea").addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        pushList();
    }
})

deleteItem.addEventListener("click",  function(){
    const clickedList = document.getElementsByClassName("clicked");
    for (let i = 0; i < clickedList.length; i++) 
        {if (clickedList[i].checked){
            clickedList[i].nextSibling.remove();
            clickedList[i].nextSibling.remove();
            clickedList[i].remove();
            i--;}
        }
})


