const noteContainer = document.querySelector('.note-container');
const noteBtn = document.querySelector('.btn');
var notes = document.querySelectorAll('.input-box');

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem('notes');
};

showNotes();

//To store our notes in the Browser
function updateStorage() {
    localStorage.setItem('notes', noteContainer.innerHTML);
};


noteBtn.addEventListener('click', ()=> {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'img/delete.png';
    noteBtn.style.backgroundColor = 'rgb(114, 174, 55)';
    noteContainer.appendChild(inputBox).appendChild(img);
});


noteContainer.addEventListener('click', function(e) {
    if(e.target.tagName.toLowerCase() === 'img') {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName.toLowerCase() === 'p') {  //if we write anything in the p element, it should update it in the browser
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            };
        });

    }
});


document.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});