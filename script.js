function myFunction() {
  var x = document.getElementById("myName").value;

  document.getElementById("demo").innerHTML = "<p>" + x + "</p>";
  //

  //

  var a = Number(document.getElementById("myNumber").value);

  var b = 6;
  var c = a + b;

  document.getElementById("demo2").innerHTML = c;

  //

    var d = document.getElementById("myAnimal").value;
    // var myArray = ["dog", "cat", "fish", d];
var q = "";
   
  if (d=="dog") {
       q = "woof woof";}
          else if (d=="cat") {
       q= "meow meow";}
        else if (d=="fish") {
       q= "blub blub";} 
     
 else {
    q="Annoying sounds";


  }
  document.getElementById("demo3").innerHTML = q;
  //

  var letter = document.getElementById("myLetter").value;
  
  var text;
  var letters = /^[A-Za-z]+$/;
  

  if (letter.match(letters)) {
    text = "The cool letter is " + letter;
    if (letter.length < 2) {
      document.getElementById("demo4").innerHTML = text;
    } else {
      alert(
        "Single letter not entered. You need to enter one letter to continue"
      );
    }
  } else {
    alert("Letter not entered. You need to enter a letter to continue");
    document.getElementById("demo5").innerHTML = text;
  }
}