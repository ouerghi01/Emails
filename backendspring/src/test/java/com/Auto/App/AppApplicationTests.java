package com.Auto.App;



//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class AppApplicationTests {
   /*public static final CassandraContainer<?> cassandra = new CassandraContainer<>("cassandra:3.11.6")
			.withExposedPorts(9042);
    @Test
	void givenCassandraContainer_whenSpringContextIsBootstrapped_thenContainerIsRunningWithNoExceptions(){
		cassandra.start();
		assertThat(cassandra.isRunning()).isTrue();
		cassandra.stop();
	
	}
    
	
	@Autowired
	private TestRestTemplate restTemplate;
	/*@Test
	void  registre () throws Exception{


		String url = "http://localhost:" + 8080 + "api/v1/auth/signup";
		SignUpDto signUpDto = new SignUpDto("avir","abir@","123123",Role.Admin);
		ResponseEntity<String> response = this.restTemplate.postForEntity(url, signUpDto, String.class);
		System.out.println(response.getBody());
		assertThat(response.getBody()).isEqualTo("ok");
	}*/
/* */
}
