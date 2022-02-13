let age = 0, nameUser = '', language = '', skills = '';
const registry = [];

const output = (msg, isList=false, isError=false)=> {
	const out = document.querySelector('output');
	if(isError){
		out.classList.add('error');
		(!isList)?out.textContent = msg: out.innerText = msg
	} else{
		if(out.classList.contains('error')) out.classList.remove('error');
		(!isList)?out.textContent = msg: out.innerText = msg
	}
}

const countWords = (text) => text.trim().split(' ').length || 0

const countLetters = (text)=> text.trim().length || 0

const countPhrases = (text) => text.trim().split('.').length || 0

const challengeTwo = (evt) => {
	let {value} = evt.target;
	const calc = (v, coin) => parseInt(parseFloat(v).toFixed(2) / coin)

	value = parseFloat(value);
	
	if(isNaN(value) || value <= 0){
		evt.target.value = '';
		output('Insira apenas valores numéricos maiores que zero!!!', false, true);
	}
	else
		output(`A quantidade mínima de moedas recebida como troco são ${value}, sendo ${calc(value, 1)} de 1 real,
				${calc(value, .5)} de 50 centavos e ${calc(value, .05)} de 5 centavos.`);
	
}

const challengeThree = (evt) => {
	const {value} = evt.target;

	// Limpa a area se houver somente espaços
	evt.target.value = value.trim();
	
	const words = countWords(value || '');
	const letters = countLetters(value || '');
	const phrases = countPhrases(value || '');

	output(`Este paragrafo tem ${letters} letras, ${words} palavras e ${phrases} frase(s).`);
}

const challengeOne = (evt) => {
	const { name, value } = evt.target;

	switch(name){
		case 'age':
			age = parseInt(value);
			break;
		case 'name':
			nameUser = value;
			break;
		case 'language':
			language = value;
			break;
	}

	if(isNaN(age) || age <= 0){
		evt.target.value = '';
		output('Insira apenas valores numéricos maiores que zero!!!', false, true);
	} else {
		if(age > 0 && nameUser !== '' && language !== ''){
			output(`Olá ${nameUser}, você tem ${age} anos e já está aprendendo ${language}!`);
			
			// Limpa o formulário
			document.querySelectorAll('input').forEach((item) => item.value = "");
		} else {
			output('Seria incrível conhecer a sua STACK!!!');
		}
	}

}

const challengeExtra = (evt) => {
	const {id, value} = evt.target;

	switch(id){
		case 'nameUser':
			nameUser = value;
			break;
		case 'age':
			age = value;
			break;
		case 'skills':
			skills = value;
			break;
	}
}

const registerUser = (evt) => {
	// Limpa o formulário
	document.querySelectorAll('input').forEach((item) => item.value = "");

	const newRegistry = new Register(nameUser, age, skills);

	if(newRegistry.isEmpty())
		output('Campos vazios são inválidos!!!', false, true);
	else if(!newRegistry.isValidAge())
		output('Insira apenas valores numéricos maiores que zero!!!', false, true);
	else {
		registry.push(newRegistry);
		output(registry.join(''), true);
	}

	nameUser = '';
	age = 0;
	skills = '';
}

class Register {
	constructor(name, age, skills){
		this.age = age;
		this.name = name;
		this.skills = skills;
	}

	isEmpty(){
		return this.name === '' || this.age === 0 || this.skills === '';
	}

	isValidAge(){
		this.age = parseInt(this.age);
		return (isNaN(this.age) || this.age <= 0)? false: true;
	}

	toString(){
		return `Nome: ${this.name}\nIdade: ${this.age}\nSkills: ${this.skills}\n\n`;
	}
}