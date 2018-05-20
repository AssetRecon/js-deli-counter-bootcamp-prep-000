var katzDeli = [];

function takeANumber (katzDeliLine,name) {
  katzDeliLine.push(name);
  console.log("Welcome "+name+". You are number "+katzDeliLine.length+" in line.");
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

function currentLine (katzDeliLine) {
  for (let i = 0; i<katzDeli.length;i++) {
    return "Line is currently:"katzDeli[i] + 1
  }
}