package com.my.club;

import com.my.club.model.UserEntity;
import io.quarkus.runtime.StartupEvent;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Singleton;
import jakarta.transaction.Transactional;

@Singleton
public class Startup {

    @Transactional
    public void loadUsers(@Observes StartupEvent evt) {
        // reset and load all test users
        UserEntity.deleteAll();
        UserEntity.add("admin", "admin", "admin");
        UserEntity.add("user", "user", "user");
    }
}
