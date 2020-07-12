// function inter(){
// console.log("nayab rehmat")
// }

// setInterval(inter, 1000)

// function out(){
//     console.log("stop")
// }
// setTimeout(out, 5000)
// function inter(){
//     console.log("hi this is me")
// }
// setInterval(inter, 100)

// var count =0;
// var interval ;
// function timer(){
//     count ++;
//     console.log(count)
// }
// interval = setInterval(timer, 1000)
// setTimeout(() => {
    
// }, 5000);


// var count =0;
// var interval ;
// function time(){
//     count++
//     console.log(count)
// }
// interval = setInterval(time , 1000)
// setTimeout(() => {
//     clearInterval(interval)
// },10000);

// function timer(){
//     console.log("hiee")
// }
// var a = setInterval(timer , 500)

// setTimeout(() => {
//     clearInterval(a)
// },5000);

// var count =0;
// function my(){
//     count++
//     console.log("No"+count)
// }
// var a=setInterval(my , 1000)

// setTimeout(() => {
//     clearInterval(a)
// }, 5000);







var min =0;
var sec =0;
var mili =0;
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var miliHeading = document.getElementById("mili")
function timer(){
    mili++
    miliHeading.innerHTML = mili;


    if(mili >= 100){
        sec++
        secHeading.innerHTML = sec;
        mili =0;
    }
    else if (sec>=60){
        min++
        minHeading.innerHTML = min
        sec=0
    }
}
// var interval = setInterval(timer , 10)

    function start(){
        interval= setInterval(timer, 10)
    }
    function stop(){
        clearInterval(interval)
    }
    function refresh(){
        mili=0;
        min=0
        sec=0;
        
        minHeading.innerHTML = min;
        secHeading.innerHTML = sec;
        miliHeading.innerHTML = mili;
        clearInterval(interval)
    }
    document.getElementById("start").disabled = true

    // function disableButton(){
	// 			document.getElementById(i.id).disabled = true;

// console.log(document.childNodes[1].childNodes[0].childNodes[1])
 

