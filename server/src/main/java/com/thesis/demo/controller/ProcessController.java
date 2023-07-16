package com.thesis.demo.controller;

import com.thesis.demo.services.ProcessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/process/")
public class ProcessController {

    @Autowired
    ProcessService processService;

    @GetMapping(path = "/processValue",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    int getSelectedIndicatorsMetrics(){
        return processService.getProcess();
    }
}