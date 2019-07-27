function cekEmail(str) {
    var validateEmail = /\S+@\S+\.\S+/
    if (validateEmail.test(str)) {
		console.log('valid')
	} else {
		console.log('invalid')
	}
}

function cekPassword(str) {
	var validatePassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
	if (validatePassword.test(str)) {
		console.log('valid')
	} else {
		console.log('invalid')
	}
}

function cekUsername(str) {
    var validateUsername = new RegExp('^(?=.*[a-z])(?=.{8,})')
    if(validateUsername.test(str)){
        console.log('valid')
    } else {
        console.log('invalid')
    }
}

cekEmail('kukuruyuk@gmail.com'); // dicetak dilayar valid
cekEmail('kuk.uruyuk@gmail'); // dicetak dilayar invalid
cekUsername('vladimi'); // dicetak dilayar invalid
cekUsername('vladimir'); // dicetak dilayar valid
cekPassword('jakartA7'); // dicetak dilayar valid
cekPassword('jakarta7'); // dicetak dilayar invalid
