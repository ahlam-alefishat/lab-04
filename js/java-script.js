


  function myfunction() {
var Name= prompt ('What is your name?');
console.log(Name);
document.write ('<h3> Hello '+Name+' </h3>');
return Name;}

myfunction();

var  code = prompt ('Do you love coding? y/n');
console.log(code);

var msg; 
if (code =="y" ){
    msg='Welcome to the club ' ;
    
document.write ('<h3> ' +msg+ ' </h3>')


for (i = 0; i < 3 ; i++) {
   console.log(i);
   var lan= prompt ('What course you are intersted in? please enter 3 courses ');
document.write ('<h3>  '+lan+' </h3>');
}
/*n=number of courses*/
  /*p=price of the course*/
function cost(n,p){
   var n= prompt ('Each course costs 100JD how many courses do you want to take?');
    console.log(n);
    var p=100
cost=n*p;
document.write ('<h3>The cost of your courses = ' +cost+ ' </h3>')

  }
  cost();
var age= prompt ('How old are you?');
console.log(age);
if (age < 18 ){
document.write ('<h3> You will be in the teenage course </h3>');}
 else {
    document.write ('<h3> You will be in the Adults course </h3>');
 }

}

else if (code =="n" ){
    msg = 'Join us and you will change your mind!';
    document.write ('<h2> ' +msg+ ' </h2>')
}
else{
    msg = 'something went wrong';
    document.write ('<h3> ' +msg+ ' </h3>')
}


  