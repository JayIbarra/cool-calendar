// display the day at the top //

// 

// button click //
var row = document.getElementById("row-1");
row.onclick = function(){};

// to create an interval for the clock 
var interval = setInterval(hourUpdater, 15000);

// local storage //
$('9hr .description').val(localStorage.getItem('9hr'));

// refresh

// loop

function saveData() {
    var input = document.getElementById("saveServer");
    localStorage.getItem("server", input.value);
    var storedValue = localStorage.getItem("server");
}

if (row.keyCode === 13) {
    reset();
}

// clearing 


// unsure 
document.querySelector('#row-1').addEventListener('click', function(){})

