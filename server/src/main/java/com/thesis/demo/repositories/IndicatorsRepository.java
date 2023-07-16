package com.thesis.demo.repositories;

import com.thesis.demo.model.Indicator;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IndicatorsRepository extends JpaRepository<Indicator, Long> {

    @Override
    List<Indicator> findAll();

}
