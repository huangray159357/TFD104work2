var hambuger_btn = document.getElementsByClassName("lineblock");
// console.log(hambuger_btn);
var hambuger_el = document.getElementsByClassName("hambuger")[0];
// console.log(hambuger_el);
for(let i=0; i< hambuger_btn.length; i++){
  hambuger_btn[i].addEventListener("click", function(){
    // console.log("test");
    hambuger_el.classList.toggle("-on");

  });
};
