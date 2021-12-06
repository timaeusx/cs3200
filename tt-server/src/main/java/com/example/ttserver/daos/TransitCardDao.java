package com.example.ttserver.daos;

import com.example.ttserver.models.TransitCard;
import com.example.ttserver.repositories.TransitCardRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class TransitCardDao {
  @Autowired
  TransitCardRepository transitCardRepository;

  @PostMapping("/api/transitcards")
  public TransitCard createTransitCard(@RequestBody TransitCard card) {
    return transitCardRepository.save(card);
  }

  @GetMapping("/api/transitcards")
  public List<TransitCard> findAllTransitCards() {
    return (List<TransitCard>) transitCardRepository.findAll();
  }

  @GetMapping("/api/transitcards/{cardId}")
  public TransitCard findTransitCardById(@PathVariable("cardId") Integer idtransitcard) {
    return transitCardRepository.findById(idtransitcard).get();
  }

  @PutMapping("/api/transitcards/{cardId}")
  public TransitCard updateTransitCard(@PathVariable("cardId") Integer id,
                                       @RequestBody TransitCard cardUpdates) {
    TransitCard card = transitCardRepository.findTransitCardById(id);
    card.setStoredvalue(cardUpdates.getStoredvalue());
    card.setExpiration(cardUpdates.getExpiration());
    card.setUserid(cardUpdates.getUserid());
    return transitCardRepository.save(card);
  }

  @DeleteMapping("/api/transitcards/{cardId}")
  public void deleteTransitCard(@PathVariable("cardId") Integer id) {
    transitCardRepository.deleteById(id);
  }
}
