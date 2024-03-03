package com.my.shift.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

import java.util.List;

@Entity
public class ClubSection extends PanacheEntity {

    public String name;

    public String description;

    @ManyToOne
    public Club club;

    @ManyToMany
    List<Member> members;

    public static List<ClubSection> findByClubId(long clubId) {
        PanacheQuery<ClubSection> clubSections = find("club.id=?1", clubId);
        return clubSections.list();
    }

}
