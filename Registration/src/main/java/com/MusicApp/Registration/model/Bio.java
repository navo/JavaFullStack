package com.MusicApp.Registration.model;


	

	import javax.annotation.Generated;


	import org.springframework.data.annotation.Id;
	import org.springframework.data.mongodb.core.mapping.Document;

	@Document(collection= "Bio")
	public class Bio {
		
		//@Id
		//for auto id generate
		//@GeneratedValue(strategy = GenerationType.IDENTITY)
		

		@Id
		private String id;
		private String age;
		private String gender;
		private String work;
		private String userId;
		
		
		
		
		@Override
		public String toString() {
			return "Bio [id=" + id + ", age=" + age + ", gender=" + gender + ", work=" + work + ", userId=" + userId
					+ "]";
		}
		
		
		public Bio(String id, String age, String gender, String work, String userId) {
			super();
			this.id = id;
			this.age = age;
			this.gender = gender;
			this.work = work;
			this.userId = userId;
		}
		
		
		public Bio() {
			// TODO Auto-generated constructor stub
		}


		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getAge() {
			return age;
		}
		public void setAge(String age) {
			this.age = age;
		}
		public String getGender() {
			return gender;
		}
		public void setGender(String gender) {
			this.gender = gender;
		}
		public String getWork() {
			return work;
		}
		public void setWork(String work) {
			this.work = work;
		}
		public String getUserId() {
			return userId;
		}
		public void setUserId(String userId) {
			this.userId = userId;
		}
		
		
		
		
		
		
		
		
		
}
