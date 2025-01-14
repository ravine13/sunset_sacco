package com.sunsetsacco.security;

import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {
    SecretKey key = Keys.secretKeyfFor(SignatureAlgorithm.HS256);

    private String SECRET_KEY = "secret";

    public JwtUtil() throws NoSuchAlgorithmException {
        
    }
    public String extraUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    
    public Date extractExpiration(String token){
        return extractExpiration(token,Claims::getExpiration);
        
    }
    public<T> T extractClaim(String token,Funcrion<Claims, T> claimsResolver){
        final Claims claim = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Claims extractAllClaims(String token){
        return Jwts.parser().setSigningKey(key).parserClaimsjws(token).getBody();
    }
    private Boolean isTokenEXpired(String token){
        return extractEXpiration(token).before(new Date());
    }
    public String generateToken(UserDetails userDeatils){
        Map<String,Object> claims = new HashMap<>();
        return createToken(claims,userDeatils.getUsername());
    }

    public String createToken(Map<String,Object> claims, String subject){
        return Jwts.builder()
        .setClaims(claims)
        .setSubject(subject)
        .setIssueAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
        .signWith(key)
        .compact();
    }
    public Boolean validateToken(String token, UserDeatils userDeatils){
        final String username = extraUsername(token);
        return(username.equals(userDetails.getUsername())&& !isTokenEXpired(token));
    }

    
}
