// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders


// js mein input array ke form mn jata hai i.e that array is process.argv.

let inputArr = process.argv.slice(2);        // argv means argument vector

let command=inputArr[0];   // yeh hume jo slice lakr dega array usme se 0 index ko lakr dega command mn

//switch case  dkh rhe hain kse work krta h
switch(command){
    case 'tree':
        console.log('Tree implemented');
        break;
        case 'organize':
        console.log('Organize implemented');
        break;
        case 'help':
        helpfn()
        break; 
        default:           //input glt do ya ni dia toh default case chalega 
            console.log("Please Enter a Valid Command");
            break;
}
function helpfn(){
    console.log(`List of all the Commands-
                     1.)Tree Command- node FO.js tree <dirname>
                     2.)Organize Command- node FS.js organize <dirname>
                     3.)Help Command- node FO.js help`)
}