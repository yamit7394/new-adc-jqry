var isOprator=false;
var expr=[];
var dotCount=0;
function display(chr){
  if(!isOprator){
    document.getElementById("result").value+=chr;
  }else{
    document.getElementById("result").value=chr;
    isOprator=false
  } 
}

function displayDot(dot){
  if(dotCount == 0){
    document.getElementById("result").value+=dot;
    dotCount=1;
  }
}

function operator(op){
  isOprator=true;
  var values=document.getElementById("result").value;
  expr.push(values);
  var ans;
  if(expr.length >= 3){
    ans=evaluateExpr();
    expr.splice(0,expr.length,ans);
    document.getElementById("result").value=ans;
  }
  expr.push(op);
}

function reset(){
  document.getElementById("result").value='';
  dotCount=0;
  expr=[];
}

function evaluateExpr(){
  var ans;
  switch(expr[1]){
    case '+':
      ans=parseFloat(expr[0])+parseFloat(expr[2]);
      break;
    case '-':
      ans=expr[0]-expr[2];
      break;
    case '*':
      ans=expr[0]*expr[2];
      break;
    case '/':
      ans=expr[0]/expr[2];
      break;
    default:
      alert("invalid operator");
      reset();
      break; 
  }
  //alert("called")
  return ans;
}

function evaluateE(){
  if(document.getElementById("result").value != ''){
    expr.push(parseFloat(document.getElementById("result").value));
  }
  var ans=0;
  if(expr.length==3){
    ans=evaluateExpr();
    document.getElementById("result").value=ans;
  }else if(expr.length>3){
    expr.splice(0,expr.length-3);
    ans=evaluateExpr();
    document.getElementById("result").value=ans;
  }
}