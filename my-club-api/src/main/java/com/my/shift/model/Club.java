package com.my.shift.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;

@Entity
public class Club extends PanacheEntity {

    public String name;

    public String description;

}
