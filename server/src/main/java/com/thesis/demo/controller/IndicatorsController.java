package com.thesis.demo.controller;

import com.thesis.demo.model.Indicator;
import com.thesis.demo.repositories.IndicatorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/indicators/")
public class IndicatorsController {

    @Autowired
    IndicatorsRepository indicatorsRepository;

    @GetMapping(path = "/selectPage")
    List<Indicator> getAllIndicators(){
        return indicatorsRepository.findAll(Sort.by(Sort.Direction.ASC, "indicatorLabel"));
    }
}
