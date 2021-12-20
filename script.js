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
hour9.addEventListener("click",save)
hour10.addEventListener("click",save)
hour11.addEventListener("click",save)
hour13.addEventListener("click",save)
hour14.addEventListener("click",save)
hour15.addEventListener("click",save)
hour16.addEventListener("click",save)
hour17.addEventListener("click",save)
}

$(".saveBtn").on("click", function(){
 document.getElementById('input').value = textArea 
  input.innerHTM
  console.log(input.innerHTML)



})
