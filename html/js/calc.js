/* 成功失敗計算用コード */

function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var D = 10;
var B = 8;
var P = (1-0.05*B) / Math.sqrt(Math.log(D)/Math.log(10)+2)  ;

var result = 'false' ;
if ( P > Math.random(1) ){
	result  = 'true' ;
}


print("P = " +  P);
print("Result = " +  result);

document.write("</p>");

