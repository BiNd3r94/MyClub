package com.my.shift.resource.security;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.SecurityContext;
import org.jboss.resteasy.reactive.NoCache;
import io.quarkus.security.identity.SecurityIdentity;

@Produces(MediaType.APPLICATION_JSON)
@Path("/api/users")
public class UsersResource {

    @GET
    @Path("/me")
    @RolesAllowed("user")
    @NoCache
    public String me(@Context SecurityContext securityContext) {
        return securityContext.getUserPrincipal().getName();
    }

}