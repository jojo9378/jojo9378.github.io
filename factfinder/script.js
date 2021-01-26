var box = document.querySelector("#fact");
var form = document.querySelector('form');

form.fact1.addEventListener("click", fact1)
form.fact2.addEventListener("click", fact2)
form.fact3.addEventListener("click", fact3)
form.fact4.addEventListener("click", fact4)
form.fact5.addEventListener("click", fact5)
function fact1(){
	box.innerHTML = "<h3>Raccoons are small, have sensitive hands and can eat just about anything, making them ideal for urban life.</h3><br><img src='https://i.imgur.com/TJhW5mC.jpg' alt='Racoon in a collared shirt'>";
}

function fact2(){
	box.innerHTML = "<h3>The giant panda's distinct black-and-white markings have two functions: camouflage and communication.  Most of the panda - its face, neck, belly, rump - is white to help it hide in snowy habitats. The arms and legs are black, helping it to hide in shade.</h3><br><img src='https://media2.giphy.com/media/EatwJZRUIv41G/giphy.gif' alt='Panda rooling down a small hill while holding something'>";
}
 
 function fact3(){
	box.innerHTML = "<h3>A group of penguins in the water is called a raft but on land they’re called a waddle!</h3><br><img src='https://media4.giphy.com/media/gbjAtqpO716Hm/giphy.gif?cid=ecf05e47bq5gkxrttnwoekhzmxzu7rek2vlmpns8ed68hxj9&rid=giphy.gif' alt='A waddle waddeling'>";
}

function fact4(){
	box.innerHTML = "<h3>Sea otters hold each other’s paws when they sleep so they don’t drift apart</h3><br><img src='https://media4.giphy.com/media/9A56kPXH16UqBKmdug/giphy.gif?cid=ecf05e47udznp4uwqnbtmcy5yzrgjx383gthqj7rsfo65nrt&rid=giphy.gif' alt='two sea otters holding each other '>";
}

function fact5(){
	box.innerHTML = "<h3>A sea lion is the first nonhuman mammal with a proven ability to keep a beat.</h3><br><img src='https://media3.giphy.com/media/MEpMPz4rRrrNaavvcC/giphy.gif?cid=ecf05e474ena4o9z0z5wbx5at97d1vlccrs0suj82hoa87tu&rid=giphy.gif' alt='a sea lion sticking his tongen out'>";
}
