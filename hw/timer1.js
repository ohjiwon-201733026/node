let i=0;
let id=setInterval(function(){
    console.log(new Date());
    ++i;
    if(i==10) clearInterval(id);
},1000);
