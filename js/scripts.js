$(document).ready(function() {


  $("form#count").submit(function(event) {
    event.preventDefault();
    var listNumbers=[];
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    for (var index = 1; index <= countTo; index += countBy) {
      listNumbers.push(index);
    };
    myString =listNumbers.toString();
    $("#result").append(myString);





  });
});
