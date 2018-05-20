var katzDeli = [];

function takeANumber (katzDeliLine,name) {
  katzDeliLine.push(name);
  return katzDeliLine.length;
}

function nowServing() {
  
if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!";
  } else {
    console.log(katzDeli[0]);
    return katzDeli.unshift;
    
  }
}