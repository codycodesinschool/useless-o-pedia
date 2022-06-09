// From stackoverflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

async function main() {
    let f = await fetch("/facts.txt");
    let factstxt = await f.text();
    let facts = factstxt.split("\n");
    let factlist = document.querySelector(".facts");
    shuffle(facts)
    for(let fact of facts) {
        li = document.createElement("li");
        li.innerHTML = fact;
        factlist.appendChild(li);
    }
}

main();