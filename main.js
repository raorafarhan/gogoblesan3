const result = document.getElementById("result");

let hobbyList = [];



function saveHobbyInput() {
  const input = document.getElementById("inputHobby");
  const hobby = input.value;
  
  hobbyList.push(hobby);
  result.textContent = hobbyList;
}

function switcher() {
  console.log(hobbyList)
  const from = document.getElementById("from");
  const to = document.getElementById("to");
  const x = hobbyList[from.value - 1];
  const y = hobbyList[to.value - 1];

  if (from.value <= hobbyList.length && to.value <= hobbyList.length) {
  
    hobbyList[from.value-1] = y
    hobbyList[to.value-1] = x
  
    result.textContent = hobbyList;
  }else{
    console.log('out of length')
  }
}
