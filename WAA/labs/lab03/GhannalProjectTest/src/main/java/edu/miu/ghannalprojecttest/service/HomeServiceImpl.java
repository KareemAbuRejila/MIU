package edu.miu.ghannalprojecttest.service;

import edu.miu.ghannalprojecttest.repository.HomeRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HomeServiceImpl implements HomeService{
    @Autowired
    HomeRep homeRep;
    @Override
    public String getHome() {
        return homeRep.getHomePage();
    }
}
