package com.sunsetsacco.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;

@Component
public class JwtRequestFilter  extends OncePerRequestFilter{

    @Autowired
    private CustomeUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil JwtUtil;

    @Override
    protected void doFilterInternal(HttpService request,HttpServelResponse response, FilterChain chain)
        throws ServletException, IOException{
            final authorizationHeader = request.getHeader("Authorization");

            String username = null;
            String jwt = null;

            if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
                jwt = authorizationHeader.substring(7);
                username = jwtUtil.extendsUsername(jwt);
            }
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null){
                userDetails userDetails = this.userDetailsService.loadUserByUsername(username);
                if(jwtUtil.validateToke(jwt, userDeatils)){
                    UsernamePasswordAuthenticationToken usernamePasswordAuthentication = new UsernamePasswordAuthentication(userDetails,null, UserDetails.getAuthorities());
                    UsernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(UsernamePasswordAuthenticationToken));

                }
            }
        }
        chain.doFilter(request,response);

    }
    
}
