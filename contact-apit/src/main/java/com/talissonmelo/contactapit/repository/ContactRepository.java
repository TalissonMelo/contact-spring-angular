package com.talissonmelo.contactapit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.talissonmelo.contactapit.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {

}
