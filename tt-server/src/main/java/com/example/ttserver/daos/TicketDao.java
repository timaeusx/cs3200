package com.example.ttserver.daos;

import com.example.ttserver.models.Ticket;
import com.example.ttserver.repositories.TicketRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TicketDao {
  @Autowired
  TicketRepository ticketRepository;
  @GetMapping("/api/tickets")
  public List<Ticket> findAllTickets() {
    return (List<Ticket>) ticketRepository.findAll();
  }

  @GetMapping("/api/tickets/{ticketId}")
  public Ticket findTicketById(@PathVariable("ticketId") Integer idticket) {
    return ticketRepository.findById(idticket).get();
  }
}
