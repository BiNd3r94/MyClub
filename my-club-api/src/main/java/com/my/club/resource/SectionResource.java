package com.my.club.resource;

import com.my.club.model.Section;
import com.my.club.model.Team;
import io.quarkus.hibernate.orm.rest.data.panache.PanacheEntityResource;
import io.quarkus.rest.data.panache.ResourceProperties;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@ResourceProperties(rolesAllowed = "user")
public interface SectionResource extends PanacheEntityResource<Section, Long> {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{sectionId}/teams")
    default List<Team> getSectionTeams(@PathParam("sectionId") long sectionId) {
        return Team.findTeamsBySectionId(sectionId);
    }
}
