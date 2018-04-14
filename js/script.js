"use strict";

 // randomizes types of activities or locations and their associated details

function Locations() {
	var locationMap = {
  "Sports": ["Cardinal Wrestling Club", "Stanford Climbing Walls"],
  "Stanford Anderson Collection": ["Make a meme from an artwork", "Convince a stranger of a story about an artwork of your chosing", "Visit the security guard's colleciton favorite"],
	"Boxing": ["Urban Combat", "Studio Kicks"],
	"Museum": ["Computer History Museum", "Tech Museum of Innovation", "Intel Museum"],
  "Drag Show": ["Aunt Charlie's Lounge", "The Starlight Room", "Oasis"]
	};

	var keys = Array.from(Object.keys(locationMap));
	var what = document.getElementById("what");
	var where = document.getElementById("where");
	console.log(keys);
	var location = keys[Math.floor(Math.random()*keys.length)]
  what.innerHTML = location;
	var value = locationMap[location];
	where.innerHTML = value[Math.floor(Math.random()*value.length)];
	console.log(Math.floor(Math.random()*value.length));
	console.log(locationMap[location]);
}
