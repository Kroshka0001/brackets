function isInbracketsConfigStart(c, bracketsConfig) {
    for (var j = 0 ; j < bracketsConfig.length; j++)
        if(bracketsConfig[j][0] == c) return true
    return false
}

function isInbracketsConfigEnd(c, bracketsConfig) {
    for (var j = 0 ; j < bracketsConfig.length; j++)
        if(bracketsConfig[j][1] == c) return true
    return false
}

function isPpareBrackets(sSymbol,eSymbol, bracketsConfig) {
    for (var j = 0 ; j < bracketsConfig.length; j++)
        if((bracketsConfig[j][0] == sSymbol) && (bracketsConfig[j][1] == eSymbol)) return true
    return false
}

function isSimpleBrackets(c,bracketsConfig) {
    for (var j = 0 ; j < bracketsConfig.length; j++) {
        if((bracketsConfig[j][0] == c) && (bracketsConfig[j][1] == c)) return true
    }
    return false
}

module.exports = function check(str, bracketsConfig) {

    var tmp = ''
    for (var i = 0; i < str.length; i++) {
        var currentSymbol = str.charAt(i)
        var isSimpleB = isSimpleBrackets(currentSymbol, bracketsConfig)

        if (currentSymbol == tmp.charAt(tmp.length-1) && isSimpleB){
            if (isPpareBrackets(tmp.charAt(tmp.length-1), currentSymbol, bracketsConfig))
                tmp = tmp.slice(0,tmp.length-1)

        } else if (isInbracketsConfigStart(currentSymbol, bracketsConfig)) {
            tmp = tmp + currentSymbol
        } else if (isInbracketsConfigEnd(currentSymbol, bracketsConfig)) {
            if ( isPpareBrackets(tmp.charAt(tmp.length-1), currentSymbol, bracketsConfig)) {
                tmp = tmp.slice(0,tmp.length-1)
            } else return false
        }
    }
    if (tmp.length != 0 ) return false
    return true
}
