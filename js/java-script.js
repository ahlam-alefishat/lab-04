


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
    
document.write ('<h2> ' +msg+ ' </h2>')

var lan= prompt ('What course you are intersted in? ');
document.write ('<h3>  '+lan+' </h3>');
var age= prompt ('How old are you?');
document.write ('<h3>  '+age+' </h3>');
}


else if (code =="n" ){
    msg = 'Join us and you will change your mind!';
    document.write ('<h2> ' +msg+ ' </h2>')
}
else{
    msg = 'something went wrong';
    document.write ('<h2> ' +msg+ ' </h2>')
}
