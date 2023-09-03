// Write your solution in this file!
const employee = {
   name: "Sam" , 
   streetAddress: "12 Broadway" , 
}

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newObject = { ...object }; 
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
       employee[key] = value;
       return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key] 
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}