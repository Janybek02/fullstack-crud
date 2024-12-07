package com.example.back_data.controller;


import com.example.back_data.entity.ImageUploadResponse;
import com.example.back_data.entity.Person;
import com.example.back_data.personDAO.PersonDAO;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:5173/")
@RequestMapping("/api")
@RestController
public class PersonController {
    @Autowired
    private PersonDAO personDAO;
    @Autowired
    private ObjectMapper objectMapper;
    @GetMapping("/user")
    public List<Person> getAllPersons() {
            return personDAO.getAllItems();
    }
    @PostMapping("/new")
    public ResponseEntity<?> newPerson (
            @RequestPart("person") String personJson ,
            @RequestPart("file") MultipartFile file ) {
        {
            try {
                Person person = objectMapper.readValue(personJson, Person.class);
                personDAO.uploadImage(file, person);
                return ResponseEntity.status(HttpStatus.OK)
                        .body("image saved successfully");
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing request: " + e.getMessage());
            }
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePerson (@PathVariable Long id) {
        try {
            personDAO.deleteItems(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing request: " + e.getMessage());
        }
    }

    @GetMapping("/image/{id}")
    public ResponseEntity<?>  getImageByName(@PathVariable("id") Long name){
        byte[] image = personDAO.getImage(name);

        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(image);
    }

    @PutMapping("/change/{id}")
    public void changePerson (@PathVariable("id") Long id, @RequestPart("person") Person person, @RequestPart( value = "file", required = false ) MultipartFile file  ) throws IOException {
        personDAO.updateItems( id, person, file);
        System.out.println(file);
    }
}
