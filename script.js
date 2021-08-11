let roll = () => {
  document.getElementById("box1").classList.remove("draw");
  document.getElementById("box1").classList.remove("win");
  document.getElementById("box1").classList.remove("lose");
  document.getElementById("box2").classList.remove("draw");
  document.getElementById("box2").classList.remove("win");
  document.getElementById("box2").classList.remove("lose");
  let play1 = Math.floor(Math.random() * 6) + 1;
  let play2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("p1score").textContent = `Score: ${play1}`;
  document.getElementById("p2score").textContent = `Score: ${play2}`;
  if (play1 == play2) {
    document.getElementById("box1").classList.add("draw");
    document.getElementById("box2").classList.add("draw");
  } else if (play1 > play2) {
    document.getElementById("box1").classList.add("win");
    document.getElementById("box2").classList.add("lose");
  } else {
    document.getElementById("box1").classList.add("lose");
    document.getElementById("box2").classList.add("win");
  }
};
