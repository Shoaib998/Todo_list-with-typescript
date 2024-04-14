import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.bold("\n \tWell Come To ToDo List Application\n"));
let main = async () => {
    while (conditions) {
        let options = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: [
                    "Add Task",
                    "Delete Task",
                    "Update Task",
                    "View Todo-List",
                    "Exit",
                ],
            },
        ]);
        if (options.choice === "Add Task") {
            await addTask();
        }
        else if (options.choice === "Delete Task") {
            await deleteTask();
        }
        else if (options.choice === "Update Task") {
            await updateTask();
        }
        else if (options.choice === "View Todo-List") {
            await viewTask();
        }
        else if (options.choice === "Exit") {
            conditions = false;
        }
    }
};
// Fuction to add new task
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your New Task :",
        },
    ]);
    todoList.push(newTask.task);
    console.log(`\n${newTask.task} task Added  Succesfully in Todo List\n`);
};
// Fuction To view todo list
let viewTask = () => {
    console.log("\n View Your Todo List \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//Fuction to delete a task from list
let deleteTask = async () => {
    await viewTask();
    let deleteIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of task you want to delete from the List :",
        },
    ]);
    let deleteTask = todoList.splice(deleteIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted Successfully from the Todo List`);
};
//fuction to update a task
let updateTask = async () => {
    await viewTask();
    let update_Task = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to update :",
        },
        {
            name: "task_Update",
            type: "input",
            message: "Now Enter update task :",
        },
    ]);
    todoList[update_Task.index - 1] = update_Task.task_Update;
    console.log(`\n index no. ${update_Task.index - 1} task Updated Succesfully in Todo List.[for update list check View todo-list]`);
};
main();
