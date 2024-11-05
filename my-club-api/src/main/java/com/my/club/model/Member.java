package com.my.club.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;
import java.util.Date;

@Entity
public class Member extends PanacheEntity {

    public String firstName;

    public String lastName;

    public Date inClubSince;

}
