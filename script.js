 var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

console.log($("#currentDay"))

console.log ((moment().hour()))

var currentHour= moment().hour() 
console.log ($('.background'))
var background = $('.background')
for (var i = 0; i < background.length; i++) { 
 var el = background[i]
 console.log (el.id)
var elId = Number(el.id) 

if (currentHour === elId) {
   el.style="background-color: red;"
}
if (currentHour < elId){
  el.style="background-color: green;"
}


}
console.log ($(".saveBtn"))
var saveButton = $(".saveBtn")
for (var i = 0; i< saveButton.length; i++){
  var btn= saveButton[i] 
  console.log (btn.id)
}

$(".saveBtn").on("click", function(){
  textarea = document.getElementById("text");
})
#btn-saveBtn.addEeventListener("click", save);