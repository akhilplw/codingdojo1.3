function print(args) {
    console.log(args)
};

//the limit
const n = 7;

function display1() {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let k = 1; k <= n - i; k++) {
            str += "   ";
        }
        for (let j = 1; j <= (i * 2) - 1; j++) {
            str += " * ";
        }
        print(str);
    }
}

display1();