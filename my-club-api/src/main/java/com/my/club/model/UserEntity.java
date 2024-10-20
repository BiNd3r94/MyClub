package com.my.club.model;

import io.quarkus.elytron.security.common.BcryptUtil;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.security.jpa.Password;
import io.quarkus.security.jpa.Roles;
import io.quarkus.security.jpa.UserDefinition;
import io.quarkus.security.jpa.Username;
import jakarta.persistence.Entity;

@Entity
@UserDefinition
public class UserEntity extends PanacheEntity {

    @Username
    public String username;

    @Password
    private String password;

    @Roles
    public String role;

    /**
     * Adds a new user to the database
     *
     * @param username
     *         the username
     * @param password
     *         the unencrypted password (it will be encrypted with bcrypt)
     * @param role
     *         the comma-separated roles
     */
    public static void add(String username, String password, String role) {
        UserEntity user = new UserEntity();
        user.username = username;
        user.password = BcryptUtil.bcryptHash(password);
        user.role = role;
        user.persist();
    }

}