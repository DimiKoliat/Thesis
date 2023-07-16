package com.thesis.demo.repositories;


import com.thesis.demo.model.Country;
import com.thesis.demo.model.Indicator;
import com.thesis.demo.model.Metric;
import io.micrometer.core.instrument.Metrics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MetricRepository extends JpaRepository<Metric, Long> {

    @Override
    List<Metric> findAll();

    @Query("SELECT m FROM Metric m WHERE m.indicator in (:indicators)")
    List<Metric> getAllByIndicatorsIds(@Param("indicators") List<Indicator> indicators);

    @Query("SELECT MIN(m.year) FROM Metric m WHERE m.indicator in (:indicators)")
    int getMinYearBySelectedIndicators(@Param("indicators") List<Indicator> indicators);

    @Query("SELECT MAX(m.year) FROM Metric m WHERE m.indicator in (:indicators)")
    int getMaxYearBySelectedIndicators(@Param("indicators") List<Indicator> indicators);

    @Query("SELECT m FROM Metric m WHERE m.indicator = (:indicator) ORDER BY  m.country ASC")
    List<Metric> getMetricByIndicator(@Param("indicator") Indicator indicator);

    @Query("SELECT MIN(m.value) FROM Metric m WHERE m.indicator = (:indicator)")
    float getMinValueMetricByIndicator(@Param("indicator") Indicator indicator);

    @Query("SELECT MAX(m.value) FROM Metric m WHERE m.indicator = (:indicator)")
    float getMaxValueMetricByIndicator(@Param("indicator") Indicator indicator);

    @Query("SELECT m FROM Metric m WHERE m.indicator = (:indicator) ORDER BY m.year , m.country ASC")
    List<Metric> getMetricByIndicatorAndYearOrderByYear(@Param("indicator") Indicator indicator);

    @Query("SELECT m FROM Metric m WHERE m.indicator = :indicator AND m.year = :year")
    List<Metric> getMetricByIndicatorAndYear(@Param("indicator") Indicator indicator,@Param("year") int year);

    @Query("SELECT m.country FROM Metric m WHERE m.indicator in (:indicators) And m.year = (:year)")
    List<Country> getCountriesByIndicatorsAndYear(@Param("indicators") List<Indicator> indicators, @Param("year") int year);

    @Query("SELECT m.country FROM Metric m WHERE m.indicator in (:indicators) ORDER BY  m.country ASC")
    List<Country> getCountriesByIndicators(@Param("indicators") List<Indicator> indicators);

    @Query("SELECT m FROM Metric m WHERE m.indicator in (:indicators) ORDER BY m.year , m.country ASC")
    List<Metric> getMetricByIndicatorAndYearOrderByYear(@Param("indicators") List<Indicator> indicators);
}