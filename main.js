const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');
document.addEventListener("DOMContentLoaded", function(e){
    $(inputField).keyup(function yes(e){
            if(e.key === 'Enter'){
                var paragraph = document.createElement('p');
                paragraph.classList.add('paragraph-styling');
                paragraph.innerText = inputField.value;
                toDoContainer.appendChild(paragraph);
                inputField.value = "";
                paragraph.addEventListener('click', function(e){
                    paragraph.style.textDecoration = "line-through";
                })
                paragraph.addEventListener('mouseover', function(e){
                    paragraph.style.textDecoration = "line-through";
                })
                paragraph.addEventListener('mouseout', function(e){
                    paragraph.style.textDecoration = "none";
                })
                paragraph.addEventListener('dblclick', function(e){
                    toDoContainer.removeChild(paragraph);
                })
                return;
            }
            
        }); });
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('mouseover', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('mouseout', function(){
        paragraph.style.textDecoration = "none";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    
})
