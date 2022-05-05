// PROMISE-1
var mypromise = new Promise((resolve, reject) => {
  console.log("Demo to show promise in Typescript !!");
  resolve(100);
});
mypromise
  .then((val) => val + 200)
  .then((val) =>
    console
      .log("Value form the promse function is " + val)
      .catch((err) => console.log("inside error block " + err))
  );
