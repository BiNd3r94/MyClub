package de.tsv.asperg.service;

import de.tsv.asperg.model.Task;
import java.util.Set;
import java.util.stream.Collectors;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@ApplicationScoped
public class TaskService {

  @Inject
  EntityManager entityManager;

  public Set<Task> getAllTasks() {
    return entityManager.createNamedQuery("Tasks.findAll", Task.class).getResultStream().collect(
        Collectors.toSet());
  }

  @Transactional
  public void createTask(Task task) {
    if (task.getId() != null) {
      return;
    }

    entityManager.persist(task);
  }
}
