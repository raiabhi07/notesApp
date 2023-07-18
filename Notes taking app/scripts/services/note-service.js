//  CRUD operation will be done here
import Note  from "../models/note.js";
export const noteOperations={
    notes:[],
    add(noteObject){
        const note=new Note(noteObject);
        this.notes.push(note);
    },
    delete(noteObject){
        const note=new Note(noteObject);
        this.notes.pop(note);
    },
    total(){
        return this.notes.length;
    },
    marktotal(){
        return 0;
    },
    unmarktotal(){
        return 0;
    },
    remove(){

    },
    search(){

    },
    sort(){

    },
    save(){

    },
    update(){

    },
    load(){

    }
}