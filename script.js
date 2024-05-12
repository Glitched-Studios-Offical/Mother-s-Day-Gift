const glowyText = document.querySelector('.glowy-text');

let hue = 0; 
setInterval(() => { 
	const heart = document.createElement('span');
	const heartColors = ['❤️', '💛', '💚', '💙', '💜']; // Define an array of heart colors
	const randomHeartColor = heartColors[Math.floor(Math.random() * heartColors.length)]; // Select a random heart color
	heart.innerText = randomHeartColor; 
	heart.style.position = 'absolute';
	heart.style.left = `${Math.random() * window.innerWidth}px`;
	heart.style.top = `${Math.random() * window.innerHeight}px`;
	heart.style.fontSize = `${Math.random() * 50}px`;
	heart.style.color = `hsl(${hue}, 100%, 50%)`; 
	document.body.appendChild(heart);
	hue = (hue + 1) % 360; 
}, 300); 