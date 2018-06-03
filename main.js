console.log('output')
function studentsFactory(){
 const addName = (newName)=>{
     initialStudents.push(newName)
 }
 const changeRoom = (newRoom)=>{
    room = newRoom
}
const deleteName = ()=>{
    var index = initialStudents.indexOf(oldName);
    if(index > -1){
      initialStudents.splice(index,1)
    }
}
const printAll = ()=>{
     
}
const deleteAll = ()=>{
    initialStudents = [];
}

    const obj = {
        addName:addName,
        changeRoom:changeRoom,
        deleteName:deleteName,
        changeRoom:changeRoom,
        deleteAll:deleteAll,
        printAll:printAll
    }
    return obj
}
const initialStudents = ["jovia", 'ritah',"madis"];
const room = "1a";
const students = studentsFactory(initialStudents, room);
console.log(initialStudents)


