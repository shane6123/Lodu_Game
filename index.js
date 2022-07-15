function Play(){
    let m = Math.floor(Math.random()*6) +1;
    let n = Math.floor(Math.random()*6) +1;
    if (m>n){
        document.getElementById("head").innerText="Player One Win"
    } else if(n>m){
        document.getElementById("head").innerText="Player Two Win"
    }else{
        document.getElementById("head").innerText="Draw the Game"
    }
    var image1="images/dice"+m+".png";
    var image2="images/dice"+n+".png";
    document.querySelectorAll("img")[0].setAttribute("src",image1);
    document.querySelectorAll("img")[1].setAttribute("src",image2);


//     if (m===1){
//         document.getElementById("img1").src="images/one.png"
//     }else if(m===2){
//         document.getElementById("img1").src="images/two.png"
//     }else if(m===3){
//         document.getElementById("img1").src="images/three.png"
//     }else if(m===4){
//         document.getElementById("img1").src="images/four.png"
//     }else if(m===5){
//         document.getElementById("img1").src="images/five.png"
//     }else if(m===6){
//         document.getElementById("img1").src="images/six.png"
//     }
//     if (n===1){
//         document.getElementById("img2").src="images/one.png"
//     }else if(n===2){
//         document.getElementById("img2").src="images/two.png"
//     }else if(n===3){
//         document.getElementById("img2").src="images/three.png"
//     }else if(n===4){
//         document.getElementById("img2").src="images/four.png"
//     }else if(n===5){
//         document.getElementById("img2").src="images/five.png"
//     }else if(n===6){
//         document.getElementById("img2").src="images/six.png"
//     }
 }