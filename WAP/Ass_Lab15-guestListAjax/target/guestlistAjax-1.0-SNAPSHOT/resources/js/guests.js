$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    let first = $("#first").val();
    let last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    let guestList = "";

    $.each(data,function (i, item) {
        guestList+="<p>"+item.first+" "+item.last+"</p>";
    })
    $("#guestList").html(guestList);
    
}