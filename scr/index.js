async function getNumber1() {
  return 10;
}

async function getNumber2() {
  return 4;
}

async function compute() {
  return await getNumber1() + await getNumber2();
}

compute()
  .then(function(res) {
    document
      .getElementById("result")
      .innerText = res + '';
});
