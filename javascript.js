// Program 1
let n=100;
for(i=0;i<=n;i++)
{
  if(i%3==0 && i%5==0)
  {
    console.log("FizzBuzz");
  }
  else if(i%3==0)
  {
    console.log("Fizz");
  }
  else if(i%5==0)
  {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}

//Program 2
function p(str)
{
    let str1="";
    let k;
    for (k=str.length-1;k>=0;k--){ 
        str1 += str[k];
    }
    if(str==str1){
        return "Palindrome";
    }
    else{
        return "Not Palindrome";
    }
}
console.log(p("level"));

//Program 3
function array(a){
    let num1 = 0;
    for (let i = 0; i < a.length; i++){
      if (a[i] >= num1){
        num1 = a[i];
      }
    }
    return num1;
  }
  
  const arr = [17,8,25,9,20,30];
  document.write(array(arr));

Program 4

function occ(l){
    let result={}
    for(let m=0;m<l.length;m++){
        let ch=l.charAt(m)
    
    if(!result[ch])
        result[ch]=1;
    else
        result[ch]+=1
    }
    return result;

}
console.log(occ("I am a fullstack developer"));

Program 5
function longest(str){ 
    str = str.split(" ") 
    return str.sort((a, b) => b.length - a.length)[0];
} 
console.log(longest("I am Renuga from IT Department"));

//Program 6
function f(num){
    let j;
    let fact=1;
    for(j=1;j<=num;j++)
        {
        fact=fact*j;
        
    }
    return(fact);
}
console.log(f(9));
 
// //Program 7

function temperature(Celsius)
{
return ((9/5)*Celsius+32);
}
document.write(temperature(25));

// //Program 8
let array=[0,1,2,3,7,6,5,4];
let x=array.length;//4
let sum1=0;
let w;
for(w=0;w<=x;w++){
    sum1=sum1+w;
}
let sum=0;
let q;
for(q=0;q<x;q++){
    sum=sum+array[q];
}
console.log(sum1-sum);

