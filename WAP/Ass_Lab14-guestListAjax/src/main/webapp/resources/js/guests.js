$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    var guestList = "";

    $.each(data,function (i, item) {
        guestList+="<p>"+item.first+" "+item.last+"</p>";
    })
    $("#guestList").html(guestList);
    
}