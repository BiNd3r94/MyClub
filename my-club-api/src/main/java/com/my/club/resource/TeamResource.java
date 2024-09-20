package com.my.club.resource;

import com.my.club.model.Team;
import io.quarkus.hibernate.orm.rest.data.panache.PanacheEntityResource;

public interface TeamResource extends PanacheEntityResource<Team, Long> {

}
