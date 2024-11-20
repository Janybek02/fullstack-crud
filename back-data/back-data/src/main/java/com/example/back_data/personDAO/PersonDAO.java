package com.example.back_data.personDAO;

import com.example.back_data.entity.ImageUploadResponse;
import com.example.back_data.entity.Person;
import com.example.back_data.repository.PersonRepository;
import com.example.back_data.utils.PersonUtils;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
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

//   public byte[] getImage (Long id)  {
//       Optional<Person> person = personRepository.findById(id);
//       return person.map(Person::getImage).orElse(null);
//   }

    @Transactional
    public byte[] getImage(Long name) {
        Optional<Person> dbImage = personRepository.findById(name);
        return PersonUtils.decompressImage(dbImage.get().getImage());
    }
   @Transactional
    public Person getInfoByImageByName(String name) {
        Optional<Person> dbImage = personRepository.findByName(name);
        return Person.builder()
                .imageType(dbImage.get().getImageType())
                .imageUrl(dbImage.get().getImageUrl())
                .image(PersonUtils.decompressImage(dbImage.get().getImage())).build();
    }
}
