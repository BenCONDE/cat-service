package com.ben.catservice.dao;

import com.ben.catservice.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit,Long> {
}
