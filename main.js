console.log('it works')
function studentsFactory(initialStudents,classRoom){
  const addName = (newStudentName)=>{
    initialStudents.push(newStudentName)
  };
  const deleteName = (oldStudentName)=>{
    var index = initialStudents.indexOf(oldStudentName);
    if(index > -1){
      initialStudents.splice(index,1)
    }
  }
const deleteAll = ()=>{
  initialStudents=[]
}
const changeRoom = (newRoom)=>{
  classRoom=newRoom
}
const printAll = () =>{
  
  if(initialStudents.length == 0) {
    console.log('Zero students');
    //return;
} else {
    const stringOfinitialStudents = [initialStudents.slice(0, -1).join(', '), initialStudents.slice(-1)[0]].join(initialStudents.length < 2 ? '' : ' and ');
    return stringOfinitialStudents + ' from ' + classRoom;
}

}
const obj={
  addName:addName,
  deleteName:deleteName,
  deleteAll:deleteAll,
  changeRoom:changeRoom,
  printAll:printAll
}
return obj
}

const initialStudents = ["jovia", 'ritah',"madis"];
console.log(initialStudents.slice(1, 3));//delete from behind
const room = "1a";
const students = studentsFactory(initialStudents, room);
console.log(initialStudents)
students.printAll();
students.addName('younes');
console.log("Younes Added ", students.printAll());
students.addName('john');
console.log("Johny Added", students.printAll());
students.deleteName('younes');
console.log("younes deleted", students.printAll());
students.changeRoom('1b');
console.log("classRoom changed", students.printAll());
students.deleteAll();
console.log("All students deleted", students.printAll());

