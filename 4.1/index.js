const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let Employee = [];

function showMenu() {
    console.log("1.Add Employee 😀");
    console.log("2.View Employee 🕵️‍♂️");
    console.log("3.Delete Employee 😡");
    console.log("4. Exit 😒");
    rl.question("Enter your choice: ", (choice) => {
        console.log(choice)
        switch (choice) {
            case '1':
                rl.question("Enter Name:", (name) => {
                    rl.question("Enter Age:", (age) => {
                        rl.question("Enter Designation:", (designation) => {
                            rl.question("Enter Salary:", (salary) => {
                                Employee.push({ name, age, designation, salary });
                                console.log("✅ Employee Added Successfully");
                                showMenu();
                            })
                        })
                    })
                    
                })
                break;
            case '2':
                let len = Employee.length;
                if (len < 1) {
                    console.log("No employee in the list");
                    showMenu();
                    break;
                }
                Employee.forEach((emp, index) => {
                    console.log(`S.No: ${index + 1} Name :${emp.name} Age: ${emp.age}`)
                })
                showMenu();
                break;
            
            case '3'://to delete the employee
                rl.question("Enter SNO of Emp you want to delete?", (num) => {
                    let index = parseInt(num) - 1
                    if (index > 0 && Employee.length > index) {
                        Employee.splice(index, 1);
                        console.log("❌ Deleted Successflly ")
                        
                    }
                    showMenu();
                })
                
                break;
            case '4':
                console.log("Exiting..........")
                rl.close();
                break;
            default:
                console.log("Invalid Choice");
        }




})    



}
showMenu();