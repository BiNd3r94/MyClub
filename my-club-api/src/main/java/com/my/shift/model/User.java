package com.my.shift.model;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import java.util.List;

public class User extends PanacheEntity {

    String username;
    List<Long> clubIds;
    List<Long> sectionIds;
    List<Long> teamIds;
}
