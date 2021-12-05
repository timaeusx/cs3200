package com.example.ttserver.models;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tickets")
public class Ticket {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  public Integer idtickets;
  public Date expiration;
  public Boolean monthlypass;
  public Integer transitcard;
  public String origin;
  public String destination;

  public Ticket() {
  }

  public Ticket(Integer idtickets, Date expiration, Boolean monthlypass,
      Integer transitcard, String origin, String destination) {
    this.idtickets = idtickets;
    this.expiration = expiration;
    this.monthlypass = monthlypass;
    this.transitcard = transitcard;
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

  public Integer getTransitcard() {
    return transitcard;
  }

  public void setTransitcard(Integer transitcard) {
    this.transitcard = transitcard;
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
