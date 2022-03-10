// function greeting(name, role) {
//     console.log(`Hello my name is ${name}`);
//     console.log(`I'm a ${role}`);
//   }

//   setTimeout(greeting, 3000, "Nathan", "Software developer");


// SetTimeout  kse work krta h actual mn yh ek Async functiuon h toh same CallBack queue Node API callback stack vala same trika apply hoga isme bhi nd ussi ki vjh se 5 sec delay krrha h

setTimeout(function(firstName){
    console.log(firstName)
},5000,'Hitesh')    // 5sec ko hum milliseconds mn dlte hn iss function mein



// SetInterval dkhenge ab 

// let count = 0;

// // function creation
// let interval = setInterval(function () {
//     // increasing the count by 1
//     count += 1;

//     console.log(count);

//     // when count equals to 5, stop the function
//     if (count === 5) {
//         clearInterval(interval);
//     }

//     // display the current time
// }, 2000);
