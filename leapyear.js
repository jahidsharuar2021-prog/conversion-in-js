

function leapyear(year){
    if(year%400==0){
        return true;
    }
    else if(year%4==0 && year%100!=0){
        return true;
    }
    else{
        return false;
    }
}
const output1=leapyear(1900);
const output2=leapyear(2024);
const output3=leapyear(2052);
const output4=leapyear(2026);
console.log(output1,output2,output3,output4);