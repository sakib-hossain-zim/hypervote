const { exec } = require('child_process');
var MAX = 110;
(function myLoop (i) {          
    setTimeout(function () {   
        var str = "curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{    "+'"$class": "org.acme.sample.Share",'+'    "shareId": "bctechsummit'+i.toString()+'",'+'    "description": "bctechsummit",'+'    "company": "hypervote",'+'    "votedecision": "null",'+'    "sharequantity": 1,'+'    "owner": "hypervote",'+'    "issuer": "hypervote"'+"   }'"+" 'http://localhost:3000/api/Share'" 
        console.log(str);
        exec(str)
       //alert('hello');          //  your code here                
       if (--i>=100) myLoop(i);      //  decrement i and call myLoop again if i > 0
    }, 1000)
 })(MAX);                        //  pass the number of iterations as an argument
