package com.my.shift.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;

import java.util.List;

@Entity
public class Club extends PanacheEntity {

    public String name;

    public String description;

    @ManyToMany
    List<Member> members;

}
