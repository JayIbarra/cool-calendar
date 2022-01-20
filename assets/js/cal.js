// button click //
var row = document.getElementById("row-1");
row.onclick = function(){};

// local storage //
var save_button = document.getElementById('Save')
save_button.onclick = saveData;

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

