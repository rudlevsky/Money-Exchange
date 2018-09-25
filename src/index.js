// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0 ) return {};

    var obj = {
        "H": 0,
        "Q": 0,
        "D": 0,
        "N": 0,
        "P": 0
    };
    
    while(true) {

        if(currency == 0) break;

        if((currency - 50) >= 0) {
            obj["H"]++;
            currency -= 50;
            continue;
        }

        if((currency - 25) >= 0) {
            obj["Q"]++;
            currency -= 25;
            continue;
        }
        if((currency - 10) >= 0) {
            obj["D"]++;
            currency -= 10;
            continue;
        }
        if((currency - 5) >= 0) {
            obj["N"]++;
            currency -= 5;
            continue;
        }
        if((currency - 1) >= 0) {
            obj["P"]++;
            currency -= 1;
            continue;
        }
    }

    var secondObj = {};
    for(var key in obj) {
        if(obj[key] != 0) {
            secondObj[key] = obj[key];
        }
    }

    return secondObj;
}
