package com.my.shift.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

import java.util.List;

@Entity
public class Team extends PanacheEntity {

    public String name;

    public String description;

    @ManyToOne
    public ClubSection clubSection;

    @ManyToMany
    public List<UserEntity> teamMembers;

    public static List<Team> findTeamsBySectionId(long clubSectionId) {
        PanacheQuery<Team> teams = find("clubSection.id=?1", clubSectionId);
        return teams.list();
    }

}
