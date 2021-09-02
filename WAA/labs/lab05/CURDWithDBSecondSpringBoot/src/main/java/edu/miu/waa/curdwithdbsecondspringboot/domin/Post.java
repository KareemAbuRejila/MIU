package edu.miu.waa.curdwithdbsecondspringboot.domin;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Post {

    @Id
    long id;
    String title;
    String content;
    String author;

}
