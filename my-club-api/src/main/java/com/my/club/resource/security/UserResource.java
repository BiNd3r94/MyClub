package com.my.club.resource.security;

import com.my.club.model.UserEntity;
import jakarta.annotation.security.RolesAllowed;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.SecurityContext;
import org.jboss.resteasy.reactive.NoCache;

@Produces(MediaType.APPLICATION_JSON)
@Path("/users")
public class UserResource {

    @GET
    @Path("/me")
    @RolesAllowed("admin")
    @NoCache
    @Produces(MediaType.APPLICATION_JSON)
    public UserEntity me(@Context SecurityContext securityContext) {
        String username = securityContext.getUserPrincipal().getName();
        return UserEntity.find("username=?1", username).singleResult();
    }

}