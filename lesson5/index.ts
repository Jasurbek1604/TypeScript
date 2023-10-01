function getData(a: string | number) {
  if (typeof a === "string") a.repeat(5);
}

function check(a: string | string[] | null) {
  if (a) {
    for (let i of a) {
      console.log(a);
    }
  }
}

const time = (key: "l" | "ll"): string => {
  let date = new Date();
  let day = {
    ll: `${date.getDate()}`,
    l: `${date.getMonth()}`,
  };
  return day[key];
};

// console.log(time("l"));
// console.log(time("ll"));

function getLength(str: string | number) {
  if (typeof str === "string") {
    console.log(str.length);
  }
}

function get(str?: string) {
  if (typeof str === "string") {
    let title: string = str;
  }
}

function getNone(): never {
  throw new Error("hello");
}

//!never => function malum bolmagan qiymat qaytarganda
//!unknown => never bilan bir xil malum bolmagan malumot return qiladi function
