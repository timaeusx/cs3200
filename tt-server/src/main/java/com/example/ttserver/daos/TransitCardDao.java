package com.example.ttserver.daos;

import com.example.ttserver.models.TransitCard;
import com.example.ttserver.repositories.TransitCardRepository;
import com.example.ttserver.repositories.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
public class TransitCardDao {
  @Autowired
  UserRepository userRepository;

  @GetMapping("/api/users/{uid}/transitcards")
  public List<TransitCard> findTransitCardsByUser(@PathVariable("uid") Integer id) {
    return userRepository.findById(id).get().getTransitCards();
  }

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
  public TransitCard findTransitCardById(@PathVariable("cardId") Integer id) {
    return transitCardRepository.findById(id).get();
  }

  @PutMapping("/api/transitcards/{cardId}")
  public TransitCard updateTransitCard(@PathVariable("cardId") Integer id,
                                       @RequestBody TransitCard cardUpdates) {
    TransitCard card = transitCardRepository.findTransitCardById(id);
    card.setStoredvalue(cardUpdates.getStoredvalue());
    card.setExpiration(cardUpdates.getExpiration());
    card.setOwnedBy(cardUpdates.getOwnedBy());
    return transitCardRepository.save(card);
  }

  @DeleteMapping("/api/transitcards/{cardId}")
  public void deleteTransitCard(@PathVariable("cardId") Integer id) {
    transitCardRepository.deleteById(id);
  }
}
