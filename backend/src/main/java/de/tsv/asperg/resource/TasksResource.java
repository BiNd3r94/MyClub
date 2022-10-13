package de.tsv.asperg.resource;

import de.tsv.asperg.model.Task;
import de.tsv.asperg.service.TaskService;
import java.util.Set;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

@Path("/tasks")
public class TasksResource {

  @Inject
  TaskService taskService;

  @GET
  public Set<Task> getAllTasks() {
    return taskService.getAllTasks();
  }

  @POST
  public void createTask(Task task) {
    taskService.createTask(task);
  }
}
