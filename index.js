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
        

        const breaks = document.createElement("br"); // to avoid inline stacking of the list
        myLists.appendChild(breaks);

        myLists.insertBefore(breaks, myLists.childNodes[0]);  // this insert the break tag above the present list
        myLists.insertBefore(newList, myLists.childNodes[0]); // this insert the newlist above the present list if any
        myLists.insertBefore(newRadio, myLists.childNodes[0]); // this insert the radio above the present list if available
        document.querySelector("#textArea").value= "" ; // this returns the text area back to an empty area

        const toDoItem = {content : textBoxContent};   // const stores the key of the data to be stored in the local storage
        localStorage.setItem('toDoItem', JSON.stringify(toDoItem)); // this creates a local storage for the to do list 


    }
}
addButton.addEventListener("click", pushList) //this addd event listener to the add button when clicked
document.getElementById("textArea").addEventListener("keypress", function(event){
    // this is a work in progress, i am still trying to find my way around how to make the enter keyboard button do the same as the enter button on screen 
    if (event.key === "Enter"){
        pushList();
    }
})

deleteItem.addEventListener("click",  function(){ // to add event listener to the delete button
    const clickedList = document.getElementsByClassName("clicked");
    for (let i = 0; i < clickedList.length; i++){  // this iterate through the clickedlist 
        if (clickedList[i].checked){ // it confirms if the radio element iterated on is checked
            clickedList[i].nextSibling.remove(); // it removes the next sibling i.e the label
            clickedList[i].nextSibling.remove(); // it removes the sibling to the label i.e the br tag 
            clickedList[i].remove(); // it removes the radio input itself
            i--; // goes to the next element on the list
        }
    }     
})


