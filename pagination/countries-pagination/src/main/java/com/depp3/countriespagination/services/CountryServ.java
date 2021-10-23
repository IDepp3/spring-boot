package com.depp3.countriespagination.services;

import javax.transaction.Transactional;

import com.depp3.countriespagination.entity.Country;
import com.depp3.countriespagination.repository.CountryRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CountryServ {
  
  @Autowired
  private CountryRepo countryRepo;

  public Page<Country> pages(Pageable pageable) {
    return this.countryRepo.findAll(pageable);
  }
}
