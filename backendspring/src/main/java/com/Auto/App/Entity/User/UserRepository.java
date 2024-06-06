package com.Auto.App.Entity.User;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.cassandra.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends CassandraRepository<User, UUID> {
    @Query("SELECT * FROM user WHERE name = ?0  Limit 1 ALLOW FILTERING")
    User findByname(String name);

    @Query("SELECT * FROM user WHERE email = ?0  Limit 1 ALLOW FILTERING")
    User findByEmail(String email);

}
