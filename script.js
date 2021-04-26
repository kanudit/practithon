//Script for Hackathon 1 


//make the circles 
let showcase = document.getElementById("showcase");
console.log(welcome);
let frame = 0;

function makeCircles() {


    // let circle = document.getElementById('circle');
    if (frame < 6) {
        //creating a element then appending him to showcase
        let link = document.createElement('a');
        let website = "#";

        showcase.appendChild(link);

        //create circle with image 
        let circle = document.createElement("div");
        let backgroundImage;
        circle.setAttribute("id", "circle");
        if (frame % 3 == 0) {
            backgroundImage = "url('https://i.gifer.com/1kW8.gif')";
            // website = "https://www.google.co.il/";
        } else if (frame % 2 == 0) {
            backgroundImage = "url('https://cdn.logo.com/hotlink-ok/logo-social-sq.png')";
            // website = "https://www.google.co.il/";
        } else {
            backgroundImage = "url('https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300')";
            website = "commercepage/commerce.html";

        }
        console.log(backgroundImage);
        link.href = website;
        circle.style.backgroundImage = backgroundImage;
        //append circle to link (which is in showcase)
        link.appendChild(circle);
        console.log(circle);
        frame++;
    }
}

setInterval(makeCircles, 0);