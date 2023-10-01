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
var time = function (key) {
    var date = new Date();
    var day = {
        ll: "".concat(date.getDate()),
        l: "".concat(date.getMonth()),
    };
    return day[key];
};
// console.log(time("l"));
// console.log(time("ll"));
function getLength(str) {
    if (typeof str === "string") {
        console.log(str.length);
    }
}
function get(str) {
    if (typeof str === "string") {
        var title = str;
    }
}
