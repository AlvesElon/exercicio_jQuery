$(document).ready(function() {

    $("form").on("submit", function (e){
        e.preventDefault();
        const newTask = $('#task').val();
        const newLine = $('<tr>');
        $('<td>').text(newTask).appendTo(newLine);
        $('</td></tr>').appendTo(newLine);
        newLine.appendTo('table tbody');
        $('#task').val('');
    });

    $(document).on("click", "table td", function() {
        $(this).css("text-decoration", "line-through");
    });
})