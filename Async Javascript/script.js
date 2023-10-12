// sync and async kya hota hai
//sync matlab ek ke baad dusra hoga, jab tak ek command complete naa ho, dusra shuru nahi hoga

//async js hai kya? 
// async matlab sare kaam shuru kardo jiska jawaab pehle aa jae uska jawaab de dena

// setInterval
// setTimeout
// promises
// fetch
// axios
// XMLHttpRequest

// js is not asynchronous
// async ki poori kahani.
// single threading amd multi threading
// callbacks
// promises
// then and catch

// Eg:
// var ans = new Promise((res, rej) => {
//     if(false){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })
//  ans
//     .then(function(){
//     console.log("resolve hogaya tha");
//     })
//     .catch(function(){
//         console.log("reject hua tha!");
//     })

// Q:user will ask a number between 0 to 9 and if the number is below 5 resolve if not reject

// var ans = new Promise((res, rej)=>{
//     var num = Math.floor(Math.random()*10)
//     console.log(num);
//     if(num<5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })
// ans.then(function() {
//     console.log("below");
// })
// .catch(function() {
//     console.log("above");
// })

// Q2
//sabse pahle ghar par aao
//gate kholo aur gate lagao
//khana pakao khana khao
//incognito mode chalao
//sojao kyuki tum thak gaye ho

var ans = new Promise(function(res, rej){
    return res("sabse pahle ghar par aao")
})

var p2 = ans.then(function(data){
    console.log(data);
    return new Promise (function(res, rej){
        return res("gate kholo gate lagao")
    })
})

var p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){
        return res("khana pakao khana khao")
    })
})

var p4 = p3.then(function(data){
    console.log(data);
    return new Promise(function(res, rej){
        return res("khana pakao khana khao")
    })
})
    p4.then(function(data){
        console.log(data);
        return new Promise(function(res, rej){
            return res("khana pakao khana khao")
        })
    })
// try and catch
// async await
// 5 use cases ekdum real world waale

// [concept aside]
// concurrency and parallelism
// throttling