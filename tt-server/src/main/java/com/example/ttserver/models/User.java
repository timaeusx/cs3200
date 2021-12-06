package com.example.ttserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String firstname;
  private String lastname;
  private String username;
  private String password;
  private String email;
  private String dob;
  @OneToMany(mappedBy = "ownedBy")
  @JsonIgnore
  private List<TransitCard> transitCards;

  public User() {
  }

  public User(Integer id, String firstname, String lastname, String username,
      String password, String email, String dob, List<TransitCard> transitCards) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.email = email;
    this.dob = dob;
    this.transitCards = transitCards;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer userId) {
    this.id = userId;
  }

  public String getFirstname() {
    return firstname;
  }

  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

  public String getLastname() {
    return lastname;
  }

  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getDob() {
    return dob;
  }

  public void setDob(String dob) {
    this.dob = dob;
  }

  public List<TransitCard> getTransitCards() {
    return transitCards;
  }

  public void setTransitCards(List<TransitCard> transitCards) {
    this.transitCards = transitCards;
  }
}
