function drawLine(str){ 
    for(var i=0; i<str.length; i++){
        var space = ''
        for(var j=0; j<str.length; j++){
            if(j===i){
                space += str[i]
            }
            else {
                space += " "
            }
        }
        console.log(space)
    }
    
}

drawLine('BOOTCAMP')
drawLine('ASIK')
