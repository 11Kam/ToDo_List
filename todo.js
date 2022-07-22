let input = prompt("Enter Your command");
const todos = ['Clean the House', 'Practice JS'];

while(input !== 'quit' && input !== 'q') {

    if(input==='list') {
        console.log('***********')
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********')

    } else if(input==='new'){
        const newTodo = prompt('What is new ToDO');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)

    } else if (input === 'delete'){
        const index = parseInt(prompt('Enter an index to delete: '));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }else {
            input = prompt("Enter Valid index");
        }
       
    }

    input = prompt("Enter Your command")
}

console.log("OK, you quit the app");