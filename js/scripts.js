$(document).ready(function() {
  $("#add-task").click(function() {
    $("#newTasks").append('<div class="newTask">' +
                            '<div class="form-group">' +
                              '<input type="text" class="form-control newTaskName" placeholder="Name of task">' +
                              '</div>' +
                          '</div>');
  });


  $("form#newList").submit(function(event) {
    var inputtedName = $("input#newListName").val();

    var newList = { name: inputtedName, tasks: [] };

    $(".newTask").each(function() {
      var inputtedName = $(this).find("input.newTaskName").val();
      var newTask = { name: inputtedName };
      newList.tasks.push(newTask);
    });

    $("ul#lists").append('<li><span class="list">' + newList.name + "</span></li>");

    $(".list").last().click(function() {
      $("#showList").show();

      $("#showList h2").text(newList.name);
      $(".listName").text(newList.name);

      $("ul#tasks").text("");
      newList.tasks.forEach(function(task) {
        $("ul#tasks").append("<li>" + task.name + "</li>");
      });
    });

    $("input#newListName").val("");
    $("input.newTaskName").val("");

    event.preventDefault();
  });
});
