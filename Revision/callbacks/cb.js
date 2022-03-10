// callback ek esa function hai jisse dusre function mn hum as an argument pass kr skte hain

// yh normally jse krte hn hum 
// function printFirstName(firstName){
//     console.log(firstName)
// }

// function printLastName(lastName){
//     console.log(lastName)
// }

// printFirstName('Hitesh')
// printLastName('Chauhan')

// ab Callback se kse krenge  vo dekhoo

function printName(firstName , cb){     
    console.log(firstName)
    cb('Chauhan')
}                                      

function printLastName(LastName){
    console.log(LastName)
}

printName('Hitesh' , printLastName);   // ab yhn humne printLastName ko as an argument pass krdia h printName function mn 