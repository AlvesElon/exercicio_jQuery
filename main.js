$(document).ready(function() {

    $("form").on("submit", function (e){
        e.preventDefault();
        const newTask = $('#task').val();
        const newLine = $('<li><tr>');
        $('<td>').text(newTask).appendTo(newLine);
        $('</td></tr><li>').appendTo(newLine);
        newLine.appendTo('table tbody');
        $('#Task').val('');
    });

    $("td").click(function() {
        $(this).css("text-decoration", "line-through");
    });
})