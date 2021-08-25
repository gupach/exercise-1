const title = document.querySelector("#title");
const Base_color = "blue" ;
const Other_color = "red"
function clickhandler(){
  const currentcolor = title.style.color ;
  if (currentcolor===Base_color) {
      title.style.color = Other_color;
  }
  else {
    title.style.color = Base_color;
  }
}

function clickevent(){
console.log("the size has been resized"); }
// 이벤트 클릭
function init(){
title.style.color = Base_color ;
title.addEventListener("click",clickhandler());
window.addEventListener("resize",clickevent());
}
init();