package com.sunsetsacco.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunsetsacco.entities.Member;
import com.sunsetsacco.repository.MemberRepository;



@Service
public class MemberService {

    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }

    public Member saveMember(Member member){
        return memberRepository.save(member);
    }

    public List<Member> getAllMembers(){
        return memberRepository.findAll();
    }
    public Member getMemberById(Integer id){
        return memberRepository.findById(id).orElse(null);
    }
    public Member updateMember(Member member){
        return memberRepository.save(member);
    }
    public void deleteMember(Integer id){
        memberRepository.deleteById(id);
    }
}
