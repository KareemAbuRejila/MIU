package edu.miu.waa.springbootwithdbandquerees.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Post {
    @Id
    @Column(name = "POST_Id")
    public long id;
    public String title;
    public String content;
    public String author;
}
