package com.Auto.App;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;


import com.Auto.App.Entity.User.UserRepository;



//import com.Auto.App.Entity.User.UserRepository;

@EnableCaching
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
@ComponentScan(basePackages = "com.Auto.App")
public class AppApplication implements CommandLineRunner {
	@Autowired
	private  UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		

		 System.out.println(userRepository.findByEmail("admin@") != null ? "User found" : "User not found");
		 

	}
}
