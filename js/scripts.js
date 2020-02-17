var myAlert = function myFunction(){
  var male= document.getElementById("male")
  var female= document.getElementById("female")
  var date= document.getElementById("date").value
  var month= document.getElementById("month").value
  var year= document.getElementById("year").value
  var d = new Date()
  d .setDate(parseInt(date))
  d .setMonth(parseInt(month)) 
  d .setFullYear(parseInt(year))

  var day = d .getDay(0)

  var akan1 = ["Kwasi", "Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  var akan2 = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

  if (male. checked ==true){
    var name = ((akan1[day]) .toString())
    alert(name)
  } else if (female. checked ==true) {
    var name = ((akan2[day]) .toString())
    alert(name)
  } else {
    alert("Input Correct information")
  }
}