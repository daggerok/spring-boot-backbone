package daggerok;

import daggerok.config.AppConfig;
import daggerok.domain.User;
import daggerok.domain.UserRestRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import javax.validation.Valid;

@Slf4j
@SpringBootApplication
@Import(AppConfig.class)
public class SpringBootBackboneApplication {

    @Bean
    CommandLineRunner testData(UserRestRepository userRestRepository) {

        userRestRepository.save(new User().setName("max"));

        return args -> userRestRepository.findAll().stream().map(String::valueOf).forEach(log::info);
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringBootBackboneApplication.class, args);
    }
}
