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
  
  return `Currently serving ${katzDeliLine[0]}.`;
  
 katzDeliLine.shift();
 return katzDeliLine;
}

function currentLine (katzDeliLine) {
  for (let i = 0; i<katzDeli.length;i++) {
    return "Line is currently:"+ katzDeli[i] + 1;
  }
}