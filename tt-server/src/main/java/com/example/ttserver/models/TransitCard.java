package com.example.ttserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
  @OneToMany(mappedBy="storedOn")
  @JsonIgnore
  private List<Ticket> tickets;

  public TransitCard() {
  }

  public TransitCard(Integer idtransitcards, Float storedvalue, Date expiration,
      User ownedBy, List<Ticket> tickets) {
    this.idtransitcards = idtransitcards;
    this.storedvalue = storedvalue;
    this.expiration = expiration;
    this.ownedBy = ownedBy;
    this.tickets = tickets;
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

  public List<Ticket> getTickets() {
    return tickets;
  }

  public void setTickets(List<Ticket> tickets) {
    this.tickets = tickets;
  }
}
