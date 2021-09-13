const date = document.getElementById('date');
const number= document.getElementById('lucky');
const btn = document.getElementById('check');
const msg= document.getElementById('msg');


function lucky(date,number){
    if(date % number === 0){
        msg.innerText="your birth date is lucky  🥳 🥳"
    } else {
        msg.innerText="your birthdate is not so lucky 😐😐"
    }
}

 btn.addEventListener('click',()=>{
    const dateValue= date.value.split('-');
    let newDate=''
    let sumOfDate=0;
     for(i=0;i<dateValue.length;i++){
        newDate=newDate+dateValue[i];
     }
    
     for(i=0;i<newDate.length;i++){
         sumOfDate=sumOfDate+Number(newDate[i])
     }
    if(date.value && number.value){
        lucky(sumOfDate,number.value);
    } else {
        msg.innerText="enter the details"
    }

})

