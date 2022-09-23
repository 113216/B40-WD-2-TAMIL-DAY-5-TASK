
// print all odd numbers in arrya in ano function
var array = [1, 2, 3, 4, 5, 6]

var odd=function(a){
    var  res="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            res+=a[i]+" ";
        }
    }
    res+=a[a.length-1];
    return res;
}
console.log(odd)

// title caps strings

var array = [ "welcome to guvi"];
var str=function (string) {
    var sent = string.toLowerCase().split(" ");
    for(var i = 0; i< sent.length; i++){
       sent[i] = sent[i][0].toUpperCase() + sent[i].slice(1);
    }
 sent.join(" ");
 var res="";
 for(let i=0;i<sent.length-1;i++)
 {
     res+=sent[i]+" "
 }
 res+=sent[sent.length-1]
 return res;
 }
 console.log(str);

// sum in array

 let = [1,2,3,4,5,6,]
 var sum =function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    { res+=a[i] }
    return res;
}
console.log(sum)

// prime numbers in an array


var sum =
function (a) {
    var  res="";
    for(i=0;i<a.length;i++){
 var count=0;
 for(j=1;j<=a[i];j++)
 {
if(a[i]%j===0)
{count++}} if(count==2){
res+=a[i]+" "
}}
 return res; 
}
console.log(sum[1,2,3,4,5,6,7,8,9,11]);


// palindromes in an array

var palind = 

function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
res+=a[i];
var count=0        
 for(j=0;j<res.length;j++)
{
 if(res[j]===res[((res.length-1)-j)])
{ count++
}}
        if(count===res.length)
        {ans+=res+" "}
        res="";
    }
    return ans; 
}
console.log(palind([1,11,343,200,798,80108,8008,999,7171,700007]))

// remove duplicates in array


var arr=function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {for(let j=i+1;j<n;j++){
if(a[i]===a[j]){
 delete a[j]
 }}
 }
for(let i=0;i<a.length;i++)
 {
 if(a[i]%10===Math.floor(a[i]%10))
 {
 b.push(a[i])
}
 }
    let c=""
 for(let i=0;i<b.length-1;i++)
 {
c+=b[i]+" ";}
c+=b[b.length-1];
return c;   
}
console.log(arr([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]));

// rotated array in k times

var rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++){
c[(i+k)%(n)]=a[i] }
for(i=0;i<c.length-1;i++)
{
 d+=c[i]+" "
 }
d+=c[c.length-1]
return d;
}
console.log(rotate([1,2,3,4,5],2))