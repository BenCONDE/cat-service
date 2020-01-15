package com.ben.catservice;

import com.ben.catservice.dao.ProduitRepository;
import com.ben.catservice.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProduitRestServices {
    //on declare interface et on injecte avec autowired
    @Autowired
    private ProduitRepository produitRepository;

    @GetMapping(value = "/listProduits")
    public List<Produit> listProduits() {
        return produitRepository.findAll();

    }

    //Rechercher un produit par id
    @GetMapping(value = "/listProduits/{id}")
    public Produit listProduits(@PathVariable(name = "id") Long id) {
        return produitRepository.findById(id).get();


    }
    //Modifier un produit par id
    @PutMapping(value = "/listProduits/{id}")
    public Produit update(@PathVariable(name = "id") Long id,
                                @RequestBody Produit produit) {
        produit.setId(id);
        return produitRepository.save(produit);
    }
    //Pour enregistrer un produit
    @PostMapping(value = "/listProduits",
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            produces = {MediaType.APPLICATION_ATOM_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public Produit save(@RequestBody Produit produit) {
        return produitRepository.save(produit);
    }
    //Supprimer un produit par id
    @DeleteMapping(value = "/listProduits/{id}")
    public void delete(@PathVariable(name = "id") Long id) {
        produitRepository.deleteById(id);
    }

}
