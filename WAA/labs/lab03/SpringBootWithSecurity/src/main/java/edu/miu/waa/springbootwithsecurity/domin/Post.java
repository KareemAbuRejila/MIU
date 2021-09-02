package edu.miu.waa.springbootwithsecurity.domin;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Post {

    @Id
    @GeneratedValue
    Long id;

    String title;
    String content;
    String author;

}
