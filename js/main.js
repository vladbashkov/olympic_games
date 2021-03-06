const sports = [
	['ðĪš','fencing'],
	['âļ','figure skating'],
	['â·','skier'],
	['ð','snowboarder'],
	['ð','golfing'],
	['ðĢ','rowing boat'],
	['ð','swimming'],
	['ðĪļ','gymnastics'],
	['ðĪū','handball']
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

const olympic = ['ðĩ','âŦ','ðī','ðĄ','ðĒ'];

const medals = [
	['ðĨ','gold'],
	['ðĨ','silver'],
	['ðĨ','bronze'],
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
	['fr','ðŦð·'],
	['it','ðŪðđ'],
	['us','ðšðļ'],
	['ca','ðĻðĶ'],
	['ru','ð·ðš'],
	['no','ðģðī'],
	['jp','ðŊðĩ'],
	['au','ðĶðš'],
	['gb','ðŽð§'],
	['se','ðļðŠ'],
	['ro','ð·ðī'],
	['ua','ðšðĶ'],
	['dk','ðĐð°'],
	['de','ðĐðŠ']
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
				return winner[0] === sport[1];   // ÐŅŅÐļÐŧŅŅŅÐūÐēÐ°ÐŧÐļ, ÐēÐĩŅÐ―ŅÐŧÐļ ŅÐĩŅ, ÐšŅÐū ÐŋÐūÐīŅÐūÐīÐļŅ ÐŋÐūÐī ŅÐĩÐšŅŅÐļÐđ ÐēÐļÐī ŅÐŋÐūŅŅÐ°
			})
			.map(function(winner){
				winner.push(getContinent(winner[2]));   // ÐÐūÐąÐ°ÐēÐļÐŧÐļ Ð―Ð°Ð·ÐēÐ°Ð―ÐļÐĩ ÐšÐūÐ―ŅÐļÐ―ÐĩÐ―ŅÐ°
				// console.log(winner);
				return winner;
			})
			.map(function(winner){
				winner.push(`<div class="${getColor(winner[1])}">${getMedal(winner[1])} - ${getFlag(winner[2])}</div>`); // ÐÐūÐąÐ°ÐēÐļÐŧÐļ, Ðē ÐšÐ°ÐšÐūÐž ÐēÐļÐīÐĩ ÐąŅÐīÐĩŅ ÐēŅÐēÐūÐīÐļŅŅŅŅ Ð―Ð° ŅŅŅÐ°Ð―ÐļŅŅ
				// console.log(winner);
				return winner;
			})
			.forEach(function(winner){
				let winnerContinent = winner[3];  // ÐŅŅÐļÐŧŅŅŅÐūÐēÐ°ÐŧÐļ ÐŋÐū ÐšÐūÐ―ŅÐļÐ―ÐĩÐ―ŅÐ°Ðž Ðļ ÐīÐūÐąÐ°ÐēÐļÐŧÐļ Ðē ÐžÐ°ŅŅÐļÐē 
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


