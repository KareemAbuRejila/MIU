package com.students.repository.genders;

import com.students.domain.Gander;

import java.util.List;

public interface GenderRepository {
    public Gander getOneGander(int id);

    public List<Gander> getAllGanders();
}
