package com.example.ttserver.models;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="transitcards")
public class TransitCard {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer idtransitcards;
  private Float storedvalue;
  private Date expiration;
  @ManyToOne
  private User ownedBy;

  public TransitCard() {
  }

  public TransitCard(Integer idtransitcards, Float storedvalue, Date expiration,
      User ownedBy) {
    this.idtransitcards = idtransitcards;
    this.storedvalue = storedvalue;
    this.expiration = expiration;
    this.ownedBy = ownedBy;
  }

  public Integer getIdtransitcards() {
    return idtransitcards;
  }

  public void setIdtransitcards(Integer idtransitcards) {
    this.idtransitcards = idtransitcards;
  }

  public Float getStoredvalue() {
    return storedvalue;
  }

  public void setStoredvalue(Float storedvalue) {
    this.storedvalue = storedvalue;
  }

  public Date getExpiration() {
    return expiration;
  }

  public void setExpiration(Date expiration) {
    this.expiration = expiration;
  }

  public User getOwnedBy() {
    return ownedBy;
  }

  public void setOwnedBy(User ownedBy) {
    this.ownedBy = ownedBy;
  }
}
