function check(dataKey, word) {
	var arrDataKey = [];
	var arrWord = [];
	for (let i = 0; i < dataKey.length; i++) {
		for (let j = 0; j < dataKey[i].length; j++) {
			arrDataKey.push(dataKey[i][j]);
		}	
    }
    console.log(arrDataKey)
    for (let k = 0; k < word.length; k++) {
        arrWord.push(word[k]);
    }
    console.log(arrWord)
    for(var i=0; i<arrDataKey.length; i++){
        for(var k=0; k<arrWord.length; k++){
        }
    }
    if (arrWord[k] !== arrDataKey[i]) {
        console.log(true);
    } else {
        console.log(false);
    }
}

var dataKey = [ 'out', 'stand', 'king', 'and' ];
var word = 'outstanding';
check(dataKey, word);
