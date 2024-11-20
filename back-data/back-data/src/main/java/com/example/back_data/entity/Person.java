package com.example.back_data.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Arrays;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Table(name="Person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String password;
    private String phone;

    private String imageUrl;
    private String imageType;
    @Lob
    @Column(length = 100000)
    private byte[] image;

}
