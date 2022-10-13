package de.tsv.asperg.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@NamedQuery(name = "Tasks.findAll", query = "SELECT t FROM Task t ORDER BY t.name")
public class Task {

  private String name;
  private String description;
  private boolean done;

  @Id
  @GeneratedValue
  private String id;

}
