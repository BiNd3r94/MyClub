package com.my.shift.resource;

import com.my.shift.model.Shift;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/shifts")
public class ShiftResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Shift> listEvents() {
        return Shift.listAll();
    }
}
