package com.my.club.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import java.util.List;

@Entity
public class Club extends PanacheEntity {

    public String name;

    public String description;

    @OneToMany
    public List<Section> sections;

    @ManyToMany
    List<Member> members;

}
