// setTimeout is an Async function 
function greeting(name, role) {
    console.log(`Hello my name is ${name}`);   //``-> isse khte hn template literal tki string concat ni krni pde 
    console.log(`I'm a ${role}`);
  }

  setTimeout(greeting, 3000, "Nathan", "Software developer");


// SetTimeout  kse work krta h actual mn yh ek Async functiuon h toh same CallBack queue Node API callback stack vala same trika apply hoga isme bhi nd ussi ki vjh se 5 sec delay krrha h

setTimeout(function (firstName) {
    console.log(firstName)
}, 4000, 'Hitesh')    // 5sec ko hum milliseconds mn dlte hn iss function mein

// upr 2 setTimeout use kia h toh uska mtlb yh ni ki 3 sec fir 3 sec delay agr niche 4000 krdunga toh upr vala  sec mn ayga nd niche vala uske 1 sec baad ayga console pr

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
