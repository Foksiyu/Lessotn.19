function triangle(n){
    let startStart = "*";
    let plusStart = "**";
    let result = "";
for (let i = 0; i < n; i++){
    let space ="";
    for (let j =1; j < n - i; j++ ){
        space +=" ";
    }
    if (!i){
        result += startStart;
    } else{
        result += plusStart;
    }
    console.log(result);

console.log("строка" + (n + 1));
}
}

/*
  *
 ***
*****
*/ 

triangle(20);