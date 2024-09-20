package com.my.club.resource;

import com.my.club.model.Event;
import io.quarkus.hibernate.orm.rest.data.panache.PanacheEntityResource;

public interface EventResource extends PanacheEntityResource<Event, Long> {

}
