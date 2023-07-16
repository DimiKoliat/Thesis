package com.thesis.demo.controller;

import com.thesis.demo.dto.PostDto;
import com.thesis.demo.services.ClusteringService;
import com.thesis.demo.services.PostDtoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/metrics/")
public class MetricsController {

    @Autowired
    PostDtoService postDtoService;

    @Autowired
    ClusteringService clusteringService;

    @PostMapping(path = "/getMetrics",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Map<String, List<?>> getSelectedIndicatorsMetrics(@RequestBody PostDto postDto){
        return postDtoService.getMap(postDto);
    }
}
