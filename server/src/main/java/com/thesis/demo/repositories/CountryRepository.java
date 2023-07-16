package com.thesis.demo.repositories;

import com.thesis.demo.model.Indicator;
import com.thesis.demo.model.Metric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CountryRepository extends JpaRepository<Metric, Long> {

    @Query("SELECT m FROM Metric m where m.id = ?1")
    Optional<Metric> findMetricByIndicatorId(String indicatorId);
}
