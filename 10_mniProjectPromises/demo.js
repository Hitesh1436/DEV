var inquirer = require("inquirer");

inquirer.prompt([       // question object h prompt 
    {
        type : 'list', 
        name : 'selection',
        choices : ['choice 1','choice 2']
    }
]).then(function(ans){
    if(ans.selection == 'choice 1'){
        console.log('Choice 1 is Selected')
    }else{
        console.log('Choice 2 is Selected')
    }
})

