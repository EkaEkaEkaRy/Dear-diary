var BigInt = require("big-integer");

exports.encoded = (password) => {
    let num_text = "";
    for (let i = 0; i < password.length; i++) {
        for (let j = 0; j < 8 - password.charCodeAt(i).toString().length; j++) num_text += "0";
        num_text += password.charCodeAt(i);
    }
    let x = num_text
    let N = "98718284527"
    let e = "3533"

    return PowMod(x, e, N).toString().slice(0, 20);
}

function PowMod(x, e, N) {
    var r = "";
    var m = "";
    for (let i = 0; i < x.length/8; i++)
    {
        m = "";
        for (let j = 0; j < 8; j++) m += x[i*8 + j];
        r += (F(BigInt(m), BigInt(e), BigInt(N)) % BigInt(N)).toString(16);
    }
    return r;
}

function F(m, e, N) {
    if (e == 0) return 1;
    if (e == 1) return m;
    if (m > N) return F(m % N, e, N);
    if (e % 2 == 0) return (F(m, e/ 2, N) % N) * (F(m, e/ 2, N) % N);
    else { 
        let n = (F(m, e - 1, N) % N) * (F(m, 1, N) % N)
        return n;
    }
}