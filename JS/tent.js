let big_img = document.getElementById("big_img");
let sm_img1 = document.getElementById("sm_img1");
let sm_img2 = document.getElementById("sm_img2");
let sm_img3 = document.getElementById("sm_img3");
let sm_img4 = document.getElementById("sm_img4");

sm_img1.addEventListener("click", function(){
    let sm_img_src = sm_img1.getAttribute("src");
    big_img.src = sm_img_src;
});