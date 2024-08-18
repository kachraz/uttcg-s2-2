// Lesson 29 - Functions as values

// Using set time out

function handleTimeOut() {
  console.log("Timeout");
}

const handleTimeOut2 = () => {
  console.log("TimeOutAgain");
};

/* 
if you 
setTimeout(handleTimeOut())
- With parantheses ,then the return value of this functipn
    will be used as a parameter for setTimeout. Which might 
    not be what u want 
- instead use - setTimeout(handleTimeOut)
    - In this case the 'setTimeout' will call the 'handleTimeOut
*/

setTimeout(handleTimeOut);
