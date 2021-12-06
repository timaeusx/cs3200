package com.example.ttserver.repositories;

import com.example.ttserver.models.TransitCard;
import com.example.ttserver.models.User;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface TransitCardRepository extends CrudRepository<TransitCard, Integer> {
  @Query(value="SELECT * FROM transitcards", nativeQuery=true)
  public List<TransitCard> findAllTransitCards();

  @Query(value="SELECT * FROM transitcards WHERE idtransitcards=:idtransitcard", nativeQuery=true)
  public TransitCard findTransitCardById(@Param("idtransitcard") Integer id);
}
