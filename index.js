var katzDeli = [];

function takeANumber (katzDeliLine,name) {
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line.";
 // return katzDeliLine.length;
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
  }
  return 'Currently serving '+ katzDeliLine.shift()+".";
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var number = [];
  for (let i = 0; i<katzDeliLine.length;i++) {
    number.push(`${i + 1}. ${line[i]}`);
  }
  
}

function currentLine(line) {
  if(line.length < 1) {
    return "The line is currently empty."
  } 
  var nameNum = [];
  for (var i = 0; i < line.length; i++) {
    nameNum.push(`${i + 1}. ${line[i]}`);
  }
    return `The line is currently: ${nameNum.join(', ')}`
}