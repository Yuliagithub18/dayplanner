$(document).ready(function () {
    var currentDay = $("#currentDay");
    var date = $("<div>");
    date.text(moment().format('dddd, MMMM Do YYYY'));
    currentDay.append(date);


    var clickToSave = $(".saveBtn").on("click", function () {
        alert("you saved this appointment");
        var apptTextContent = $(this).siblings(".col-md-10").val();
        console.log(apptTextContent);
        localStorage.setItem("apptTextContent", apptTextContent);
    });
    clickToSave()
});




