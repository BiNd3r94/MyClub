package com.my.club.resource;

import com.my.club.model.Club;
import com.my.club.model.Event;
import com.my.club.model.Section;
import io.quarkus.hibernate.orm.rest.data.panache.PanacheEntityResource;
import io.quarkus.rest.data.panache.ResourceProperties;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import java.util.List;

@ResourceProperties(rolesAllowed = ("user"))
public interface ClubResource extends PanacheEntityResource<Club, Long> {

    @GET
    @Produces
    @Path("/{clubId}/sections")
    default List<Section> getClubSections(@PathParam("clubId") long clubId) {
        return Section.findByClubId(clubId);
    }

    @GET
    @Produces
    @Path("/{clubId}/events")
    default List<Event> getClubEvents(@PathParam("clubId") long clubId) {
        return Event.findByClubId(clubId);
    }
}
