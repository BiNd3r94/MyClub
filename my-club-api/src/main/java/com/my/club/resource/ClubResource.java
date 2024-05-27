package com.my.club.resource;

import com.my.club.model.Club;
import com.my.club.model.ClubSection;
import com.my.club.model.Event;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/clubs")
public class ClubResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Club> listClubs() {
        return Club.listAll();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{clubId}")
    public Club getClub(long clubId) {
        return Club.findById(clubId);
    }

    @GET
    @Produces
    @Path("/{clubId}/sections")
    public List<ClubSection> getClubSections(long clubId) {
        return ClubSection.findByClubId(clubId);
    }

    @GET
    @Produces
    @Path("/{clubId}/events")
    public List<Event> getClubEvents(long clubId) {
        return Event.findByClubId(clubId);
    }
}
