// adding functionality to page
function createTimeblock(hour) {
    var container = $(".container");
    var hoursDiv =$("<div>");
    var timeBlockDiv =$("<div>");
    var saveBtn =$("<button>");
}
// string to change var related to the time with the number
var hourText = moment(hour.toString(), "h"). format("hA");
// bootstrap to format content
timeBlockDiv.addClass("row time-block");
hoursDiv.addClass("hour col-md-1").append(hourText);
textArea.addClass("description col-md-10").attr("id", hour);
saveBtn.addClass("btn saveBtn col-md-1").append($("<i>").addClass)("fas-fa-save");
timeBlockDiv.append(hoursDiv).append(textArea).append(saveBtn);
    container.append(timeBlockDiv);
// link formatting
    if(parseInt(moment().format("H"))===hour){
        textArea.addClass("present");
    } else if(parseInt(moment().format("H"))>hour){
        textArea.addClass("past");
    } else {
        textArea.addClass("future");
    }

// Creating time block for each hour
function init(){
    for(let i=8; i<=17; i++)
    };
    $(".saveBtn").on("click", function(){
        var id = $(this).siblings("textarea").attr("id");
        var events = $(this).siblings("textarea").val();
        localStorage.setItem(id, events);
        console.log(id);
        console.log(events);
        console.log("connected");
    });
    $(".description").each(function(){
        var id = $(this).attr("id");
        var storedEvent = localStorage.getItem(id);
        $(this).val(storedEvent);
    });
    };
    
    //  init function when the page is loaded
    $(document).ready(init());