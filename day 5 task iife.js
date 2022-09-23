// programs using anonymous and iife function

// print all odd numbers iife

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

(function odd(){
    for (var i=0;i<array.length;i++){
    if(array[i]%2!=0);
    console.log(array[i]);
}}
)
();

// title caps in an array

var array = [ "welcome to guvi" ]
(function (string) {
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
})
 res+=sent[sent.length-1]
 console.log(res);

// sum of all numbers in an array

let = [1, 2, 3, 4, 5, 7];
 (function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    console.log(res);
})

// return all prime numbers in an array
let = [1,2,3,4,5,6,7,8,9,11]
(function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    console.log(res);
 
})

// return all palimdromes in an array
var array = [1,11,343,411,575,600,7887,80108,999,11];
(function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    { res+=a[i];
        var count=0
     for(j=0;j<res.length;j++) {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++    
            }}
        if(count===res.length)
        {
            ans+=res+" "}
        res=""; }
    console.log(ans);
 
}) 

// remove duplicate items in an array
let = [1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]
(function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
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
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     console.log(c);
    
});

// rotate array in k times
let =[[1,2,3,4,5],3]
(function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  console.log(d);
})