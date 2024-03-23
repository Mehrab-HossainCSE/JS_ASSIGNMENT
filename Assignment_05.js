function doubleChar( str){
    if(typeof str !== 'string' || str.lenght==0) return null;
    let res='';
    for(let i=0;i<str.length;i++){
        res+=str[i]+str[i];
    }
    return res;
}
console.log(doubleChar('exercise'));//eexxeerrcciissee
console.log(doubleChar())//null