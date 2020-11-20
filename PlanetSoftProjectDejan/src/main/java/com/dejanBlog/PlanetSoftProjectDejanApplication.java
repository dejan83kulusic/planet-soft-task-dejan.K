package com.dejanBlog;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;


@SpringBootApplication
public class PlanetSoftProjectDejanApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlanetSoftProjectDejanApplication.class, args);
	}
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(ApplicationArguments.class);
    }

}
