let a=[];
for(let i=0;i<100;i++){
    a[i]=parseInt(Math.floor(Math.random()*100+1));
}

for(let i=0;i<100;i++){

    if(a[i]%2==1) continue; 
    else a.splice(i,1);
}
console.log(a);