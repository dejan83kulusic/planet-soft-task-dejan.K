$("#sortable").sortable();
$("#sortable").disableSelection();

countTodos();

// all done btn
$("#checkAll").click(function () {
    AllDone();
});

//create todo
$('.add-todo').on('keypress', function (e) {
    e.preventDefault
    if (e.which == 13) {
        if ($(this).val() != '') {
            var todo = $(this).val();
            createTodo(todo);
            countTodos();
        }
    }
});

// mark task as done
$('.todolist').on('change', '#sortable li input[type="checkbox"]', function () {
    var checkBox = $(this);
    if (checkBox.prop('checked')) {
        var doneItem = checkBox.parent().parent().find('p').text();

        $.ajax({
            url: '/todos/' + doneItem,
            type: 'PUT',
            async: false,
            success: function (result) {
                checkBox.parent().parent().parent().addClass('remove');
                done(doneItem);
                countTodos();
            },
            error: function (error) {
                checkBox.prop('checked', false);
                alert('Todos cannot be updated !');
            }
        });

    }
});

//delete done task from "already done"
$('.todolist').on('click', '.remove-item', function () {
    removeItem(this);
});

// count tasks
function countTodos() {
    var count = $("#sortable li").length;
    $('.count-todos').html(count);
}

//create task
function createTodo(text) {
    $.post("/todos/" + text)
        .done(function (result) {
            var markup = '<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" /><p>' + text + '</p></label></div></li>';

            $('#sortable').append(markup);
            $('.add-todo').val('');
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            alert('Todos cannot be added !');
        })
}

//mark task as done
function done(doneItem) {
    var done = doneItem;
    var markup = '<li><p>' + done + '</p><button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>';
    $('#done-items').append(markup);
    $('.remove').remove();
}

//mark all tasks as done
function AllDone() {
    var myArray = [];

    $('#sortable li').each(function () {
        myArray.push($(this).text());
    });

    var notAddedTasks = [];

    // add to done
    for (i = 0; i < myArray.length; i++) {
        var text = myArray[i];
        $.ajax({
            url: '/todos/' + text,
            type: 'PUT',
            async: false,
            success: function(result) {
                $('#done-items').append('<li><p>' + text + '</p><button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
            },
            error: function (error) {
                notAddedTasks.push(text);
            }
        });
    }

    $('#sortable li').remove();

    for (i = 0; i < notAddedTasks.length; i++) {
        var text = notAddedTasks[i];

        var markup = '<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" /><p>' + text + '</p></label></div></li>';
        $('#sortable').append(markup);
    }
    countTodos();
}

//remove done task from list
function removeItem(element) {
    var text = $(element).parent().find('p').text();

    $.ajax({
        url: '/todos/' + text,
        type: 'DELETE',
        async: false,
        success: function (result) {
            $(element).parent().remove();
        },
        error: function (error) {
            alert('Todos cannot be deleted !');
        }
    });
function inside(point, vs) {

    var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
}
{
    var polygon = [[32, 126], [163, 32], [293, 127], [244, 282], [82, 281]];
    document.addEventListener('click', function (event) {
        let isInsidePolygon = inside([event.clientX, event.clientY], polygon);
        if (isInsidePolygon)
            document.getElementById('click-result').innerHTML = 'You clicked inside of polygon.';
        else
            document.getElementById('click-result').innerHTML = 'You clicked outside of polygon.';
    });

}
}