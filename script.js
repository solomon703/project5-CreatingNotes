// ! Getting HTML elements 
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// ! to show data
function showNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// ! to store data
function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// ! to create new container with paragraph and image
createBtn.addEventListener("click", ()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable","true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

// ! To delete notes by clicking delete-image.
notesContainer.addEventListener("click",function(e){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }
  // ! to save the note in local browser storage.
  else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt =>{
      nt.onkeyup = function(){
        updateStorage();
      }
    })

  }
})

//!  For line break or to move to next line
document.addEventListener("keydown",event =>{
  if(event.key ===  "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});