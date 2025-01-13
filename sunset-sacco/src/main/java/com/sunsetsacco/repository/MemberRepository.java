package com.sunsetsacco.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunsetsacco.entities.Member;

public interface MemberRepository extends JpaRepository<Member,Integer> {
    @Query("SELECT r FROM Member r WHERE r.member_id = :id")
    Optional<Member> findMemberById(@Param("id")Integer id);
    
}
