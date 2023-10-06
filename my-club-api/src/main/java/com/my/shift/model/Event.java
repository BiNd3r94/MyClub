package com.my.shift.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
public class Event extends PanacheEntity {

    public String name;

    public String description;

    public LocalDateTime date;

    @ManyToOne
    @Nonnull
    public Club club;

}
