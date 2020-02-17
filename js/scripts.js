var myAlert = function myFunction(){
  var male= document.getElementById("male")
  var female= document.getElementById("female")
  var date= document.getElementById("date").value
  var month= document.getElementById("month").value
  var year= document.getElementById("year").value
  var d = new Date()
  d .setDate(parseInt(date))
  d .setMonth(parseInt(month) + 1)
  d .setFullYear(parseInt(year))

  var day = d .getDay(0)

  if (day = 1) {
    alert("Monday")
  } else {
    alert("wrong")
  }
}