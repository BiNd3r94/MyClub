package com.my.shift.resource;

import com.my.shift.model.Team;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/teams")
@Produces(MediaType.APPLICATION_JSON)
public class TeamResource {

    @GET
    public List<Team> listClubs() {
        return Team.listAll();
    }

    @GET
    @Path("/{teamId}")
    public Team getTeam(long teamId){
        return Team.findById(teamId);
    }

}
