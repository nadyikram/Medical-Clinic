FROM openjdk:8-jdk-alpine
COPY ./build/libs/Depistage-0.0.1-SNAPSHOT.jar /usr/app/
WORKDIR /usr/app
VOLUME /tmp
EXPOSE 8383
ENTRYPOINT ["java","-jar","Depistage-0.0.1-SNAPSHOT.jar"]
