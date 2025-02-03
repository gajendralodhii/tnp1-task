var btn = document.querySelector("button")

function randomGenerater (){

    var randomX = Math.floor(Math.random ()*95);
    var randomY = Math.floor(Math.random ()*95);
    var rotate = Math.floor(Math.random ()*360);
    var imaIdx = Math.floor(Math.random ()*arr.length);
    return{randomX, randomY, rotate ,imaIdx};
}

let arr = [
    'https://plus.unsplash.com/premium_photo-1710462716386-08fe07bb3c61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnV0dGVyZmx5JTIwcG5nfGVufDB8fDB8fHww' ,

     'https://images.unsplash.com/photo-1535068484622-7a077e5aa558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnV0dGVyZmx5JTIwcG5nfGVufDB8fDB8fHww',

     'https://images.unsplash.com/photo-1535068484622-7a077e5aa558?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnV0dGVyZmx5JTIwcG5nfGVufDB8fDB8fHww',

     'https://plus.unsplash.com/premium_photo-1664299705200-942bf0ca8a5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJ1dHRlcmZseSUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D',
];

btn.addEventListener("click",function(){

    let img = document.createElement("img");
    var { randomX , randomY, rotate ,imaIdx} = randomGenerater();
    img.src = arr [imaIdx];
    img.style.position = "absolute";
    img.style.top = randomX  + "%";
    img.style.left = randomY + "%"; 
    img.style.rotate = rotate + "deg";
    img.style.width = "100px"
    document.body.appendChild(img);
    


});
