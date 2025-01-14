package com.sunsetsacco.service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.sunsetsacco.entities.User;

import jakarta.transaction.Transactional;


@Service
@Slf4j
public class CustomUserDetailsService implements userDetailsService{

    @Autowired
    UserService userService;


    @Transactional(readOnly = true)
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<BigInteger> channelList = Arrays.asList(new BigInteger("1"), new BigInteger("4"), new BigInteger("8"));//USSD, APP, WHATSAPP
        log.info("GETTING USER PASSED ########" + username);
        User user = userService.getUserByUserName(username);
        if (user == null) {
            System.out.println("User not found");
            throw new UsernameNotFoundException("Username not found");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),new ArrayList<>());
    }
}
    

