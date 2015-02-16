$(document).ready(function() {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var events_array = [
        {
        title: 'Test1',
        start: new Date(2015, 2, 20),
        tip: 'Personal tip 1'},
    {
        title: 'Test2',
        start: new Date(2015, 2, 21),
        tip: 'Personal tip 2'}
    ];

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
		editable: true,
        events: events_array,
        eventRender: function(event, element) {
            element.attr('title', event.tip);
        }
    });
});