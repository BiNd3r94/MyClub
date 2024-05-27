package com.my.club.resource;

import com.my.club.model.Event;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/events")
public class EventResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Event> listEvents() {
        return Event.listAll();
    }
}
