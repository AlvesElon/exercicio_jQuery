$(document).ready(function() {

    $("form").on("submit", function (e){
        e.preventDefault();
        const newTask = $('#task').val;
        const newLine = $('<li><ul><tr>');
        $(`<td>${newTask.val}</td>`).appendTo(newLine);
        $(`</tr></ul></li>`).appendTo(newLine);
        $('#newTask').val('');
    });
})