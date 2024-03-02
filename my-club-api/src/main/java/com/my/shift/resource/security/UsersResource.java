package com.my.shift.resource.security;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.SecurityContext;
import java.security.Principal;
import org.jboss.resteasy.reactive.NoCache;

@Produces(MediaType.APPLICATION_JSON)
@Path("/users")
public class UsersResource {

    @GET
    @Path("/me")
    @RolesAllowed("admin")
    @NoCache
    @Produces(MediaType.APPLICATION_JSON)
    public Principal me(@Context SecurityContext securityContext) {
        return securityContext.getUserPrincipal();
    }

}