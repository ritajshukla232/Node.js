let a=10;
let b =0;
const waitingData = new Promise((res,rej)=>{
     setTimeout(() => {
        res(10);
     }, 2000);
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})