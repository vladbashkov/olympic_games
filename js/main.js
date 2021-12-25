const sports = [
	['🤺','fencing'],
	['⛸','figure skating'],
	['⛷','skier'],
	['🏂','snowboarder'],
	['🏌','golfing'],
	['🚣','rowing boat'],
	['🏊','swimming'],
	['🤸','gymnastics'],
	['🤾','handball']
];

const winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const olympic = ['🔵','⚫','🔴','🟡','🟢'];

const medals = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];

const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

const flags = [
	['fr','🇫🇷'],
	['it','🇮🇹'],
	['us','🇺🇸'],
	['ca','🇨🇦'],
	['ru','🇷🇺'],
	['no','🇳🇴'],
	['jp','🇯🇵'],
	['au','🇦🇺'],
	['gb','🇬🇧'],
	['se','🇸🇪'],
	['ro','🇷🇴'],
	['ua','🇺🇦'],
	['dk','🇩🇰'],
	['de','🇩🇪']
];

function getContinent(country){
	let winnerContinent = continents.filter(function(item){
		return item[0] === country;
	});
	return winnerContinent[0][1];
}

function getMedal(medal){
	let currentMedal = medals.filter(function(item){
		return item[1] === medal;
	})
	return currentMedal[0][0];
}

function getColor(medal){
	let currentMedal = medals.filter(function(item){
		return item[1] === medal;
	})
	return currentMedal[0][1];
}

function getFlag(country){
	let currentFlag = flags.filter(function(item){
		return item[0] === country;
	})
	return currentFlag[0][1];
}

let THs = olympic
		.map(function(item){
		return `<th>${item}</th>`;
		})

THs.splice(0,0,`<th></th>`);

let TRs = sports

	.map(function(sport){

		let Europe = [];
			Africa = [];
			Americas = [];
			Asia = [];
			Oceania = [];

		let currentWiners = winners
			.filter(function(winner){
				// console.log(winner);
				return winner[0] === sport[1];   // Отфильтровали, вернули тех, кто подходит под текущий вид спорта
			})
			.map(function(winner){
				winner.push(getContinent(winner[2]));   // Добавили название континента
				// console.log(winner);
				return winner;
			})
			.map(function(winner){
				winner.push(`<div class="${getColor(winner[1])}">${getMedal(winner[1])} - ${getFlag(winner[2])}</div>`); // Добавили, в каком виде будет выводиться на страницу
				// console.log(winner);
				return winner;
			})
			.forEach(function(winner){
				let winnerContinent = winner[3];  // Отфильтровали по континентам и добавили в массив 
					switch(winnerContinent){
						case `Europe`:
							Europe.push(winner[4]);
							break;
						case `Africa`:
							Africa.push(winner[4]);
							break;
						case `The Americas`:
							Americas.push(winner[4]);
							break;
						case `Asia`:
							Asia.push(winner[4]);
							break;
						case `Oceania`:
							Oceania.push(winner[4]);
							break;
				}
			})

		// console.log(currentWiners);

		return `<tr>
		<td>${sport[0]}</td>
		<td>${Europe.join(``)}</td>
		<td>${Africa.join(``)}</td>
		<td>${Americas.join(``)}</td>
		<td>${Asia.join(``)}</td>
		<td>${Oceania.join(``)}</td>
		</tr>`

	})
	.join(``);

document.write(`<table>
	<thead>
		<tr>
			${THs.join(``)}
		</tr>
	</thead>
	<tbody>
			${TRs}	
	</tbody>
	</table>`);


