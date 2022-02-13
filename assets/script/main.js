const challenge_one = createPageIntern('/assets/challenge/one.htm');
const challenge_two = createPageIntern('/assets/challenge/two.htm');
const challenge_three = createPageIntern('/assets/challenge/three.htm');
const challenge_extra = createPageIntern('/assets/challenge/extra.htm');
let lastChildAdded = null;

const changeTitle = (text) => document.querySelector('head title').textContent= text;

function createPageIntern(url){
	const iframePage = document.createElement('iframe');
	iframePage.setAttribute('src', url);
	return iframePage;
}

const challenge = (evt) => {
	const name = evt.target.name.replace('challenge', '')
	document.querySelector('.modal').style.display = 'flex';

	switch(name){
		case '1':
			lastChildAdded = document.querySelector('#panel').appendChild(challenge_one);
			changeTitle(`Desafio #${name.toUpperCase()}`);
			break;
		case '2':
			lastChildAdded = document.querySelector('#panel').appendChild(challenge_two);
			changeTitle(`Desafio #${name.toUpperCase()}`);
			break;
		case '3':
			lastChildAdded = document.querySelector('#panel').appendChild(challenge_three);
			changeTitle(`Desafio #${name.toUpperCase()}`);
			break;
		default:
			lastChildAdded = document.querySelector('#panel').appendChild(challenge_extra);
			changeTitle(`Desafio #${name.toUpperCase()}`);
			break;
	}
}

document.querySelector('#close').onclick = (evt)=>{
	document.querySelector('.modal').style.display = 'none';
	document.querySelector('#panel').removeChild(lastChildAdded);
	changeTitle('Tech da Semana');
}

document.querySelectorAll('main button').forEach((item)=>{
	item.onclick = challenge;
})