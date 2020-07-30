# Handshake Web Application Simulation (Lab Work):
Designed & developed a replica of the Handshake Web Application which is widely used by college students to apply for jobs and by various employers to post jobs. 
This project was developed as a part of Lab Work for the Graduate Course CMPE 273 (Enterprise Distributed Systems) at San Jose State University.

# System Architecture and Design:
The system architecture used previously was remodeled by implementing NoSQL MongoDB in place of MySQL & Redux with ReactJS to manage states. Also, the system performance was augmented by incorporating Apache Kafka for messaging queues.

The new system architecture was based on 5 technologies namely Redux, React, NodeJS, Kafka and Mongo DB. These technologies had various significance with respect to their usage. 

1. Redux: Redux was used for maintaining a store wherein anyone from the application can fetch and update the data based on the actions carried out in the application. It was important as it helped reduce the complexity of passing data through various React components and was efficient in code maintainability.

2. React: React was primarily used for the front-end display and creating the web pages. It helped in creating the UI of the application responsive thanks to its component-based architecture

3. NodeJS: It was used mainly for the backend. It was used in this case for pushing the data into the Kafka topics. It acted as a producer or consumer based on the type of request it sends/receives.

4. Kafka: Kafka, a messaging queue, was used to help post the data into it and eventually interact with the database. The Kafka architecture helped to make the system architecture fault tolerant as there were multiple partitions inside the topic which came into play in a case where one of them failed.

5. Mongo DB: It was used for the creation and maintenance of unstructured database which was essential where the structure of data is not determined from the start. It helped in creating simpler CRUD operations 

6. AWS Cloud EC2 instance: This was where the entire application including the front end, back end and Kafka back end was deployed. There were 3 EC2 instances created for the same and the database was deployed on MongoDB Atlas Server.
