// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

function listKeyValues(obj) {
  Object.entries(obj);
}

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

function deleteRollNo (obj) {
  delete obj.rollno;
  console.log(obj);
}
deleteRollNo(student);


// 3. Write a function to get the length of an object.
function objLen(obj) {
  return Object.keys(obj).length;
}
objLen(student);