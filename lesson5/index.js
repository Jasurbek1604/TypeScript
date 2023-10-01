function getData(a) {
    if (typeof a === "string")
        a.repeat(5);
}
function check(a) {
    if (a) {
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
            var i = a_1[_i];
            console.log(a);
        }
    }
}
