package com.depp3.countriespagination.repository;

import com.depp3.countriespagination.entity.Country;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepo extends JpaRepository<Country, Long>{
  
}
