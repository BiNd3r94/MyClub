package com.my.shift.resource;

import com.my.shift.model.Team;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/teams")
public class TeamResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Team> listClubs() {
        return Team.listAll();
    }
}
