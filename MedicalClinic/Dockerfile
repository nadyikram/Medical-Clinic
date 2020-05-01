FROM openjdk:8-jdk-alpine
COPY ./build/libs/MedicalClinic-0.0.1-SNAPSHOT.jar /usr/app/
WORKDIR /usr/app
VOLUME /tmp
EXPOSE 8181
ENTRYPOINT ["java","-jar","MedicalClinic-0.0.1-SNAPSHOT.jar"]