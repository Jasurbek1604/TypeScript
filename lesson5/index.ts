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
