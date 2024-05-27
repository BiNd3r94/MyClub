package com.my.club.resource;

import com.my.club.model.ClubSection;
import com.my.club.model.Team;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/sections")
public class ClubSectionResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<ClubSection> listClubSections() {
        return ClubSection.listAll();
    }

    @GET
    @Produces
    @Path("/{sectionId}")
    public ClubSection getSection(long sectionId) {
        return ClubSection.findById(sectionId);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{sectionId}/teams")
    public List<Team> getSectionTeams(long sectionId) {
        return Team.findTeamsBySectionId(sectionId);
    }
}
