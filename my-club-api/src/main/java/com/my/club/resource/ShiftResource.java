package com.my.club.resource;

import com.my.club.model.Shift;
import io.quarkus.hibernate.orm.rest.data.panache.PanacheEntityResource;
import io.quarkus.rest.data.panache.ResourceProperties;

@ResourceProperties(rolesAllowed = "user")
public interface ShiftResource extends PanacheEntityResource<Shift, Long> {

}
