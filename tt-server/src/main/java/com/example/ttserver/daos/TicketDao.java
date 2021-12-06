package com.example.ttserver.daos;

import com.example.ttserver.models.Ticket;
import com.example.ttserver.repositories.TicketRepository;
import com.example.ttserver.repositories.TransitCardRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
public class TicketDao {
  @Autowired
  TransitCardRepository transitCardRepository;

  @GetMapping("/api/transitcards/{cid}/tickets")
  public List<Ticket> findTicketsByTransitCard(@PathVariable("cid") Integer id) {
    return transitCardRepository.findById(id).get().getTickets();
  }

  @Autowired
  TicketRepository ticketRepository;

  @PostMapping("/api/tickets")
  public Ticket createTicket(@RequestBody Ticket ticket) {
    return ticketRepository.save(ticket);
  }

  @GetMapping("/api/tickets")
  public List<Ticket> findAllTickets() {
    return (List<Ticket>) ticketRepository.findAll();
  }

  @GetMapping("/api/tickets/{ticketId}")
  public Ticket findTicketById(@PathVariable("ticketId") Integer id) {
    return ticketRepository.findById(id).get();
  }

  @PutMapping("/api/tickets/{ticketId}")
  public Ticket updateTicket(@PathVariable("ticketId") Integer id,
                             @RequestBody Ticket ticketUpdates) {
    Ticket ticket = ticketRepository.findTicketById(id);
    ticket.setExpiration(ticketUpdates.getExpiration());
    ticket.setMonthlypass(ticketUpdates.getMonthlypass());
    ticket.setStoredOn(ticketUpdates.getStoredOn());
    ticket.setOrigin(ticketUpdates.getOrigin());
    ticket.setDestination(ticketUpdates.getDestination());
    return ticketRepository.save(ticket);
  }

  @DeleteMapping("/api/tickets/{ticketId}")
  public void deleteTicket(@PathVariable("ticketId") Integer id) {
    ticketRepository.deleteById(id);
  }
}
