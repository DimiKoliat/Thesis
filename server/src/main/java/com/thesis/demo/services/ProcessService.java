package com.thesis.demo.services;

import org.springframework.stereotype.Service;

@Service
public class ProcessService {
    private int process;

    public int getProcess() {
        return process;
    }

    public void setProcess(int process) {
        this.process = process;
    }
}
