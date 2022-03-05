const { createPromptModule } = require("inquirer");

const cp = require('child_process')
var inquirer = require("inquirer");

function displayList() {
    inquirer.prompt([       // question object h prompt 
        {
            type: 'list',
            name: 'selection',
            choices: ['About', 'Skills', 'Academics', 'Projects']
        }
    ]).then(function (ans) {
        if (ans.selection == 'About') {
            console.log('i just want to lear more and more')
            displayNext()
        } else if (ans.selection == 'Skills') {
            console.log('Java','JavaScript')
            displayNext()
        } else if (ans.selection == 'Academics') {
            cp.execSync('Start Chrome https://1drv.ms/b/s!Amp0qdmOpvkHjEDULdlUnKRXFhW6')
            displayNext()
        } else if (ans.selection == 'Projects') {
            cp.execSync('Start Chrome https://github.com/Hitesh1436')
            displayNext()
        }
    });
}
displayList()

// Go back option ->

function displayNext(){
       inquirer
  .prompt([
    {
           type : 'list',
           name : 'selection',
           choices : ['Go back' , 'exit']

    }
  ])
  .then(function(ans){
    if(ans.selection =='Go back'){
           displayList()
    }
    else if(ans.selection == "exit"){
           console.log('Resume closed')
    }
  })
}