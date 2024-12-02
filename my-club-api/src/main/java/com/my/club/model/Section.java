package com.my.club.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Section extends PanacheEntity {

    public String name;

    public String description;

    @ManyToOne
    @JoinColumn(name = "club_id")
    public Club club;

    @OneToMany(targetEntity = Team.class, cascade = CascadeType.ALL, orphanRemoval = true)
    public List<Team> teams;

    @ManyToMany
    List<Member> members;

    public static List<Section> findByClubId(long clubId) {
        PanacheQuery<Section> clubSections = find("club.id=?1", clubId);
        return clubSections.list();
    }

}
