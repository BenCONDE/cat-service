package com.ben.catservice;

import com.ben.catservice.dao.ProduitRepository;
import com.ben.catservice.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
public class CatServiceApplication implements CommandLineRunner {

    @Autowired
    private ProduitRepository produitRepository;

    //poue exposer le id dans spring data rest
    @Autowired
    private RepositoryRestConfiguration restConfiguration;
    public static void main(String[] args) {
        SpringApplication.run(CatServiceApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        restConfiguration.exposeIdsFor(Produit.class);


      produitRepository.save(new Produit(null,"ordinateur HO",1300,10));
        produitRepository.save(new Produit(null,"Stylo HO",89,50));
        produitRepository.save(new Produit(null,"Telephone",300,1000));
        produitRepository.save(new Produit(null,"Carte Sim POO",10,10));
        produitRepository.save(new Produit(null,"ordinateur HO",1300,10));
        produitRepository.save(new Produit(null,"Stylo HO",89,50));
        produitRepository.save(new Produit(null,"Telephone",300,1000));
        produitRepository.save(new Produit(null,"Carte Sim POO",10,10));
        produitRepository.save(new Produit(null,"ordinateur HO",1300,10));
        produitRepository.save(new Produit(null,"Stylo HO",89,50));
        produitRepository.save(new Produit(null,"Telephone",300,1000));
        produitRepository.save(new Produit(null,"Carte Sim POO",10,10));
        produitRepository.save(new Produit(null,"ordinateur HO",1300,10));
        produitRepository.save(new Produit(null,"Stylo HO",89,50));
        produitRepository.save(new Produit(null,"Telephone",300,1000));
        produitRepository.save(new Produit(null,"Carte Sim POO",10,10));

        produitRepository.findAll().forEach(p->{
            System.out.println(p.toString());
        });
    }
}
