let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

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
    $(document).bind('keyup',function(){
        $(inputField).keydown(function(e){ 
            if(e.keyCode == 13 || e.which == 13){
                $(addToDoButton).click();
            }
        }); });
})
