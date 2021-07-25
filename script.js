// write code below
document.querySelector(".btn").addEventListener("click",function() {
	var input=document.querySelector("#search").value;
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=08102d50157d7a9fa60d1a78e125f463`)
	.then(response => response.json())
	.then(data => {
		console.log(data)
	document.querySelector("#location").innerHTML=data.name
	document.querySelector(".desc").innerHTML=data.weather[0].description
	document.querySelector(".c").innerHTML=data.main.temp
	})
	      
      });
