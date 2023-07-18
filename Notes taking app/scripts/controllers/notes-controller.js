//Controller(I/O) +Events + Talk to Service
import {noteOperations} from '../services/note-service.js';
window.addEventListener('load',init);
function init(){
    showCounts();   
    bindEvents();
    disableButton();
}
const  disableButton=()=>
    document.querySelector('#delete').setAttribute("disabled",true);
function bindEvents(){
    document.querySelector('#add').addEvecntListener('click',addNote);
}
function showCounts(){
    document.querySelector('#total').innerText= noteOperations.total();
    document.querySelector('#marktotal').innerText= noteOperations.marktotal();
    document.querySelector('#unmarktotal').innerText= noteOperations.unmarktotal();
}
function addNote(){
    //read id, title, description, date of completion, importance.
    // const id =document.querySelector("#id").value;
    // const title =document.querySelector("#title").value;
    const fields=["id","title","description","date","importance"];
    const noteObject ={} //object literal
    for(let field of fields){
        noteObject[field]=document.querySelector(`#${field}`).value.trim();  
    }
noteOperations.add(noteObject); 
printNote(noteObject);
showCounts();
}
function printIcon(myClassName='trash',fn,id){
    // <i class="fa-solid fa-trash"></i>
    // <i class="fa-solid fa-pen"></i>
    const iTag=document.createElement('i');
    iTag.setAttribute('note-id',id);
    iTag.className=`fa-solid fa-${myClassName} me-2 hand`;
    iTag.addEventListener('click',fn);
    return iTag;
    
}
function toggleMark(){
    // console.log("Toggle Mark",this);  
    const icon=this;
    const id=this.getAttribute('note-id');
    const tr=icon.parentNode.parentNode; 
    tr.classList.toggle('table-danger');
}
function edit(){
    console.log("edit");
}
function printNote(noteObject){
    const tbody=document.querySelector("#notes");
    const row=tbody.insertRow(); //<tr> will be created
    for(let key in noteObject){
        const td=row.insertCell();  //td will be created
        td.innerText=noteObject[key];
    }
    const td=row.insertCell();
    td.appendChild(printIcon('trash',toggleMark,noteObject.id));
    td.appendChild(printIcon('user-pen',edit,noteObject.id));
}