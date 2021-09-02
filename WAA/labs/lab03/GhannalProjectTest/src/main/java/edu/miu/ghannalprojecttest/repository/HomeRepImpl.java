package edu.miu.ghannalprojecttest.repository;

import org.springframework.stereotype.Repository;

@Repository
public class HomeRepImpl implements HomeRep{
    @Override
    public String getHomePage() {
        return "This Is Home Page";
    }
}
