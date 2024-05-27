package com.my.club.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Event extends PanacheEntity {

    public String name;

    public String description;

    public LocalDateTime date;

    @ManyToOne
    @Nonnull
    public Club club;

    public static List<Event> findByClubId(long clubId) {
        PanacheQuery<Event> events = find("club.id=?1", clubId);
        return events.list();
    }
}
