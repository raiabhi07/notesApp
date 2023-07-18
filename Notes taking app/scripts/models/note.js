class Note{   //in this the class will be created in object and then it will be destructured at the destination file
    constructor(noteObject){
        for(let key in noteObject){
            this[key]=noteObject[key];
        }
    }
}
export default Note;