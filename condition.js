function Jahidhight(inch){
    const feet=inch/12;
    return feet;
}
const result= Jahidhight(75)
 console.log(result);



 //inch to feet a conver
console.log("example number two");
 function inchtofit(inch){
   const inchfraction=inch/12;
   const feet=parseInt(inchfraction);
   const inch_unit=inch%12;
   const result=feet+' feet '+inch_unit+' inch ';
   return result;
 }
 const output=inchtofit(75);
 console.log(output);

 // miles ot kilometer converter
 console.log('example number three');
 function milestokilo(miles){
    const kilo=miles*1.60934;
    return kilo;
 }
 const res=milestokilo(50);
 console.log(res);
