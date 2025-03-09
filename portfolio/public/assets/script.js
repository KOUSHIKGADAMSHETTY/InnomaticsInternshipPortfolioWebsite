document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Website Loaded");
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi, I'm Koushik Gadamshetty, a passionate developer exploring the world of coding!";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "I am a passionate web developer who loves crafting creative and engaging web pages. My curiosity drives me to constantly explore new technologies and enhance my skills. I am currently pursuing my bachelor's degree and have a keen interest in developing web applications that are both functional and visually appealing. Learning and improving are integral parts of my journey, and I am always eager to take on new challenges in web development.";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text-1").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    const text ="As a MERN Stack developer, I have a strong foundation in building dynamic and responsive web applications. I specialize in developing full-stack applications using MongoDB, Express.js, React.js, and Node.js, ensuring seamless front-end and back-end integration. With a keen eye for design and performance optimization, I focus on creating user-friendly, scalable, and efficient web solutions. My passion for learning drives me to stay updated with the latest web technologies, enabling me to build innovative and high-performing applications."
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text-2").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();
});