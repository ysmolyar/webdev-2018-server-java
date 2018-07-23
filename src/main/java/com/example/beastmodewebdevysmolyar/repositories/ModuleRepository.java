package com.example.beastmodewebdevysmolyar.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.beastmodewebdevysmolyar.models.Course;

public interface ModuleRepository extends CrudRepository<Course, Integer> {
	
}
