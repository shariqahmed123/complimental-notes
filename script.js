
let cars = ["You are Too Good !", " So creative", "Stylish ","classy"," Handsome", 
"You're a gift to those around you","You are a smart cookie", "You have the best Smile :)",
"You're Strong","You light up the room","Your laugh makes surroundings cheerful!",
"You're more helpful then you realize","You've a great sense of humor","Your thoughts are refreshing",
"You are really courageous","You bring out best in other people","You're a blessing for your surrondings"];
let number = parseInt(Math.random() * 17);
let images = ["gif/img1.gif","gif/img2.png","gif/img3.gif","gif/img4.png","gif/img5.gif","gif/img6.gif","gif/img7.gif","gif/img8.png","gif/img9.gif","gif/img10.gif",]
let imgSrc = parseInt(Math.random() * 10);
function clickBtn(){

 let userName =  document.getElementById("txt").value;
 localStorage.setItem("userName", userName);
 return false;

}


document.getElementById("nameValue").innerHTML += localStorage.getItem("userName");
document.getElementById("nametxt").innerHTML += localStorage.getItem("userName");
document.getElementById("para").innerHTML = "   " + cars[number];
document.getElementById("imgSrc").src = images[imgSrc];