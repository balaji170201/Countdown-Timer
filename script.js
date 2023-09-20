countdown(10,display);

function countdown(count,callback){
    if(count >= 1){
        document.getElementById('countdown').innerHTML = count;
        setTimeout(function(){
            countdown(count-1,callback)
        },1000)
    }
    else{
        callback()
    }
}
function display(){
    document.getElementById('countdown').innerHTML = "Happy Independence Day";
}
   