package com.example.ttserver.models;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="tickets")
public class Ticket {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer idtickets;
  private Date expiration;
  private Boolean monthlypass;
  @ManyToOne
  private TransitCard storedOn;
  private String origin;
  private String destination;

  public Ticket() {
  }

  public Ticket(Integer idtickets, Date expiration, Boolean monthlypass,
      TransitCard storedOn, String origin, String destination) {
    this.idtickets = idtickets;
    this.expiration = expiration;
    this.monthlypass = monthlypass;
    this.storedOn = storedOn;
    this.origin = origin;
    this.destination = destination;
  }

  public Integer getIdtickets() {
    return idtickets;
  }

  public void setIdtickets(Integer idtickets) {
    this.idtickets = idtickets;
  }

  public Date getExpiration() {
    return expiration;
  }

  public void setExpiration(Date expiration) {
    this.expiration = expiration;
  }

  public Boolean getMonthlypass() {
    return monthlypass;
  }

  public void setMonthlypass(Boolean monthlypass) {
    this.monthlypass = monthlypass;
  }

  public TransitCard getStoredOn() {
    return storedOn;
  }

  public void setStoredOn(TransitCard transitcard) {
    this.storedOn = transitcard;
  }

  public String getOrigin() {
    return origin;
  }

  public void setOrigin(String origin) {
    this.origin = origin;
  }

  public String getDestination() {
    return destination;
  }

  public void setDestination(String destination) {
    this.destination = destination;
  }
}
