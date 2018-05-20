var katzDeli = [];

function takeANumber (katzDeliLine,name) {
  katzDeliLine.push(name);
  return katzDeliLine.length;
}

console.log(takeANumber(katzDeli,"sam"));
