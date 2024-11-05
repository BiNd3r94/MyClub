package com.my.club.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import java.time.LocalDateTime;

@Entity
public class Shift extends PanacheEntity {

    public String name;

    public String description;

    public LocalDateTime startTime;

    public LocalDateTime endTime;

    public String assignee;

}
