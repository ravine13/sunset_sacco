package com.sunsetsacco.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sunsetsacco.entities.User;


@Repository
public interface UserRepository extends JpaRepository<User,Integer>{
    @Query("SELECT r FROM User r WHERE r.user_id = :id")
    Optional<User> findUserById(@Param("id") Integer id);

    Optional<User> findUserByUsername(String username);
    
}
