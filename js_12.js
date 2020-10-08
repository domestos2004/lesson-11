
function start(){

	var games = ['Minecraft', 'Bloodborne', 'The Witcher 3'];

  games.push('Minecraft');
	games.push('Bloodborne');
	games.push('The Witcher 3');

//	games.pop('Minecraft');
//	games.pop('Bloodborne');
//	games.pop('The Witcher 3');

  console.log(games[1]);
	console.log(games[2]);
	console.log(games[3]);



 var games = ['Minecraft', 'Bloodborne', 'The Witcher 3'];

 //1
  for (let step=0; step< games.length; step ++){
		console.log(games);
	}

	 var games = ['Minecraft', 'Bloodborne', 'The Witcher 3'];
	 console.log (games.toString());

	  var games2 = games.slice(0, games. length);
		 console. log (games.toString());

		  var games3 = games.concat (games2);
			console.log(games3. toString());

			var arr = [0, 1, 3, 4, 5, 6, 7];
			arr.fill(12, 2, 5);
			console. log(arr);

			console.log (arr.indexof(1));

			arr = [0, 2, 5, 6, 4, 3, 6, 9, 1];
			console.log (arr.toString());
			arr.sort();
			console.log (arr.toString());

			console.log("min: " + Math.min(...arr));
			console.log ("max: " + Math.max(...arr));

}
