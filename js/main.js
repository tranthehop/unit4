var dog = {
	name: 'bubby',
	picture: 'images/dog.jpg',
	action: function() {
	alert('bubby said hello everybody');
	},
};
function setInfor() {
	var x = document.getElementById('animal').children;
	x[0].innerHTML = dog.name;
	x[1].setAttribute('src',dog.picture);
	document.getElementById("hello").onclick = dog.action;
	// x[2].onclick = dog.action; cách khác easy hon 
}
