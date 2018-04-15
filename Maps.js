"use strict";

 // randomizes types of activities or locations and their associated details

function Locations() {
	var locationMap = {
  "Stanford Climbing Walls": ["Race your friend to the top", "Climb in the form of your favorite animal"],
  "Stanford Anderson Collection": ["Make a meme from an artwork", "Convince a stranger of a story about an artwork of your chosing", "Visit the security guard's colleciton favorite"],
	"Boxing": ["visit Urban Combat", "visit Studio Kicks"],
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

function refresh() {
    location.reload();
}
