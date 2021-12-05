package com.example.ttserver.daos;

import com.example.ttserver.models.TransitCard;
import com.example.ttserver.repositories.TransitCardRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TransitCardDao {
  @Autowired
  TransitCardRepository transitCardRepository;
  @GetMapping("/api/transitcards")
  public List<TransitCard> findAllTransitCards() {
    return (List<TransitCard>) transitCardRepository.findAll();
  }

  @GetMapping("/api/transitcards/{cardId}")
  public TransitCard findTransitCardById(@PathVariable("cardId") Integer idtransitcard) {
    return transitCardRepository.findById(idtransitcard).get();
  }
}
