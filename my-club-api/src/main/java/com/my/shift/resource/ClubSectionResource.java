package com.my.shift.resource;

import com.my.shift.model.ClubSection;
import com.my.shift.model.Team;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/sections")
public class ClubSectionResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<ClubSection> listClubs(long clubId) {
        return ClubSection.listAll();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{sectionId}/teams")
    public List<Team> getSectionTeams(long sectionId) {
        return Team.findBySectionId(sectionId);
    }
}
