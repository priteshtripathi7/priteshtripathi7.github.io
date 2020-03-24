let deadLine = new Date("mar 26, 2020 14:00:00").getTime();

const timer = setInterval(() => {

    let now = new Date().getTime(); 
    let t = deadLine - now; 

    let days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    let seconds = Math.floor((t % (1000 * 60)) / 1000); 

    hours += (24 * days);

    document.querySelector('#hours').innerHTML = hours + "hr";
    document.querySelector('#minutes').innerHTML = minutes + "min";
    document.querySelector('#seconds').innerHTML = seconds + "sec";
    if (t < 0) { 
        clearInterval(timer); 
        document.querySelector('#hours').innerHTML = "The hack is over";
        document.querySelector('#minutes').innerHTML = "";
        document.querySelector('#seconds').innerHTML = "";
    } 
}, 1000);