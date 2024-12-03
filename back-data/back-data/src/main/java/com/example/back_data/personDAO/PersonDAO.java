package com.example.back_data.personDAO;

import com.example.back_data.entity.ImageUploadResponse;
import com.example.back_data.entity.Person;
import com.example.back_data.repository.PersonRepository;
import com.example.back_data.utils.PersonUtils;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class PersonDAO {
    @Autowired
   private PersonRepository personRepository;
   public List<Person> getAllItems() {
       return personRepository.findAll();
   }

   public ImageUploadResponse uploadImage(MultipartFile file,Person person ) throws IOException {
       person.setImageType(file.getContentType());
       person.setImageUrl(file.getOriginalFilename());
       person.setImage(PersonUtils.compressImage(file.getBytes()));
       personRepository.save(person);
       return new ImageUploadResponse("image saved successfully");
   }
   public void deleteItems( Long id) {
       personRepository.deleteById(id);
   }

    @Transactional
    public byte[] getImage(Long name) {
        Optional<Person> dbImage = personRepository.findById(name);
        return PersonUtils.decompressImage(dbImage.get().getImage());
    }
    public void updateItems(Long id, Person person, MultipartFile file) throws IOException {
       Optional<Person>  optionalPerson = personRepository.findById(id);
       if(optionalPerson.isPresent()) {
           if (file != null && !file.isEmpty()) {
               Person person1 = optionalPerson.get();
               person1.setName(person.getName());
               person1.setSurname(person.getSurname());
               person1.setEmail(person.getEmail());
               person1.setPassword(person.getPassword());
               person1.setPhone(person.getPhone());
               person1.setImageType(file.getContentType());
               person1.setImageUrl(file.getOriginalFilename());
               person1.setImage(PersonUtils.compressImage(file.getBytes()));
               personRepository.save(person1);
           }else {
               Person person1 = optionalPerson.get();
               person1.setName(person.getName());
               person1.setSurname(person.getSurname());
               person1.setEmail(person.getEmail());
               person1.setPassword(person.getPassword());
               person1.setPhone(person.getPhone());
               personRepository.save(person1);
           }
       }
           else {
           ResponseEntity.notFound().build();
       }
       }
}




