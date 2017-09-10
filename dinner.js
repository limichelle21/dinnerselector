

var myDinner = ["Chinese", "Thai", "Mexican", "Pizza", "Burgers", "Salad", "Peruvian", "Korean", "Japanese", "Eating In", "Steak", "Seafood"]

function getDinner() = {
	var random = myDinner[Math.floor(Math.random() * myDinner.length)];
	document.getElementById("demo").innerHTML=random;
}



/* document.getElementbyId("message").innerHTML = 5+6;

/* code for picking a random array value
var randomValue = myArray[Math.floor(Math.random() * myArray.length)];
document.getElementbyId("message").innerHTML=random;
}
