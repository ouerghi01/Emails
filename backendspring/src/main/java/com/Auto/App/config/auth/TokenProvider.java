package com.Auto.App.config.auth;

import org.springframework.stereotype.Service;

import com.Auto.App.Entity.User.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Value;

@Service
public class TokenProvider {
    @Value("${spring.security.jwt.token.secret-key}")
    private String JWT_SECRET;

    public String generateAccessToken(User user) {
        Algorithm algorithm = Algorithm.HMAC256(JWT_SECRET);
        try {
            return JWT.create()
                    .withIssuer("auth0")
                    .withSubject(user.getUsername())
                    .withClaim("email", user.getUsername())
                    .withExpiresAt(genAccessExpirationDate())
                    .sign(algorithm);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public String ValidateToken(String token) {
        Algorithm algorithm = Algorithm.HMAC256(JWT_SECRET);
        try {
            return JWT.require(algorithm).build().verify(token).getSubject();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    private Instant genAccessExpirationDate() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
