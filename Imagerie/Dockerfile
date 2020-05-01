FROM openjdk:8-jdk-alpine
COPY ./build/libs/Imagerie-0.0.1-SNAPSHOT.jar /usr/app/
WORKDIR /usr/app
VOLUME /tmp
EXPOSE 8282
ENTRYPOINT ["java","-jar","Imagerie-0.0.1-SNAPSHOT.jar"]
