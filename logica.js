function btnEncriptar(textAreaEntrada,textAreaSalida){
    var texto = (textAreaEntrada.value).toLowerCase()
    var map = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
            }
    texto = texto.replace(/a|e|i|o|u/gi, function(matched){
        return map[matched];
    })
    textAreaSalida.value =texto
}

function btnDesencriptar(textAreaEntrada,textAreaSalida){
    var texto = (textAreaEntrada.value).toLowerCase()
    var map = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
            }
    texto = texto.replace(/ai|enter|imes|ober|ufat/gi, function(matched){
        return map[matched];
    })
    textAreaSalida.value =texto
}

function btnCopiar(){
    
}