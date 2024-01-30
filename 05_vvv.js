const readline=require('readline');

const x=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
x.question("Enter a number: ",(num)=>{
    countDown(num,1);
    x.close();
});

function countDown(num,i){
    console.log(num+" * "+i+" = "+num*i);
    let nextNumber=i+1;
    if(nextNumber<=10){
        setTimeout(function(){
            countDown(num,nextNumber);
        },1000);
    }
    else{
        setTimeout(function(){
        console.log('Table completed');
        },1000);
    }
}
