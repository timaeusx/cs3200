package com.example.ttserver.repositories;

import com.example.ttserver.models.Ticket;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface TicketRepository extends CrudRepository<Ticket, Integer> {
  @Query(value="SELECT * FROM tickets", nativeQuery=true)
  List<Ticket> findAllTickets();

  @Query(value="SELECT * FROM tickets WHERE idtickets=:idticket", nativeQuery=true)
  Ticket findTicketById(@Param("idticket") Integer id);
}
