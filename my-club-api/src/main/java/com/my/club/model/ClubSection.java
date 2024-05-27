package com.my.club.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import java.util.List;

@Entity
public class ClubSection extends PanacheEntity {

    public String name;

    public String description;

    @ManyToOne
    public Club club;

    @OneToMany(targetEntity = Team.class, cascade = CascadeType.ALL, orphanRemoval = true)
    public List<Team> teams;

    @ManyToMany
    List<Member> members;

    public static List<ClubSection> findByClubId(long clubId) {
        PanacheQuery<ClubSection> clubSections = find("club.id=?1", clubId);
        return clubSections.list();
    }

}
