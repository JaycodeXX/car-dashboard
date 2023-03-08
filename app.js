let action = document.getElementById("action");
let startBtn = document.getElementById("start");
let driveBtn = document.getElementById("drive");
let brakeBtn = document.getElementById("brake");
let parkBtn = document.getElementById("park");
let reverseBtn = document.getElementById("reverse");
let message = "";

const car = {
    driver: "",
    model: "",
    name: "",
    color: "",
    start: function start(){
        return message = "Starting car..."
    },
    drive: function drive(){
        return message = "Driving..."
    },
    brake: function brake(){
        return message = "Braking..."
    },
    park: function park(){
        return message = "Parking..."
    },
    reverse: function reverse(){
        return message = "Reversing..."
    },
};

startBtn.addEventListener("click", function(){
    action.innerHTML = car.start();
});
driveBtn.addEventListener("click", function(){
    action.innerHTML = car.drive();
});
brakeBtn.addEventListener("click", function(){
    action.innerHTML = car.brake();
});
parkBtn.addEventListener("click", function(){
    action.innerHTML = car.park();
});
reverseBtn.addEventListener("click", function(){
    action.innerHTML = car.reverse();
});
