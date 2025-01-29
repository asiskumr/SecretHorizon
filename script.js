
const currentYear = new Date().getFullYear();
var today = new Date();
var month = today.getMonth(); // 0-based (0 = January)
var day =  today.getDate();

const nextYear = currentYear + 1;
if (month === 0 && day <= 28) {
    nextYear -= 1;
}
    
var countDownDate = new Date("Jan 28, "+ nextYear +" 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = "Time left: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
        clearInterval(x); 
        document.getElementById("countdown").innerHTML = "Special day for my favorite girl";
        document.getElementById("countdown").style.color = "red";
        document.getElementById("santhu").innerHTML = "🧸🐼";
    }
}, 1000);



function showMessage(message, duration = 5000) {
  
    var messageDiv = document.createElement('div');

    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.backgroundColor = '#ff4081';
    messageDiv.style.color = '#fff'; 
    messageDiv.style.fontSize = '20px';
    messageDiv.style.padding = '15px 30px';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.3)';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.transition = 'opacity 0.5s ease-out';

    messageDiv.innerText = message;
    

    document.body.appendChild(messageDiv);
    
   
    setTimeout(function() {
        messageDiv.style.opacity = '0';
        setTimeout(function() {
            document.body.removeChild(messageDiv);
        }, 500);
    }, duration);
}
