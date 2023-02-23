var clear_btn = document.querySelector('#clear');
    clear_btn.addEventListener('click',()=>{
      parent.value="";
    });

var back_spacebtn = document.querySelector('#space');
    back_spacebtn.addEventListener('click',()=>{
      parent.value = parent.value.slice(0,-1);
    })

var parent = document.querySelector('#result');

function clicking(e){
  parent.value += e.value;
}

function evaluation(){
  parent.value = eval(parent.value);
}

window.addEventListener('keypress',(e)=>{
  operator = ['-','+','/','*'];
  key = e.key;
  code = e.code;
  if(code.includes('Digit') || operator.includes(key)){
    parent.value = parent.value + key;
  }
})