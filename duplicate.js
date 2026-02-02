
// find the unique array  value of multiple array element

function duplicate(names){
    console.log(names);
    const array=[];
    for(const nam of names){
        if(array.includes(nam)===false){
            array.push(nam);
        }
    }
    return array;
}
const namesarray=['jahid','Hasan','akash','Hasan','shihab','akash'];
const output=duplicate(namesarray);
console.log(output);