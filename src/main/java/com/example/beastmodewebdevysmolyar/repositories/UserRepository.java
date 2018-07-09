package com.example.beastmodewebdevysmolyar.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.beastmodewebdevysmolyar.models.User; 

public interface UserRepository extends CrudRepository<User, Integer> {

}
