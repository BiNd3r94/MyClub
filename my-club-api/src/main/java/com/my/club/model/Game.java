package com.my.club.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

@Entity
public class Game extends PanacheEntity {

    @ManyToOne
    public Team homeTeam;

    @ManyToOne
    public Team awayTeam;

    public int homeScore;

    public int awayScore;

}
