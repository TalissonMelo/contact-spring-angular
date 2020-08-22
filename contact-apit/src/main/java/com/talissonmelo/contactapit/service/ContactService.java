package com.talissonmelo.contactapit.service;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.talissonmelo.contactapit.entity.Contact;
import com.talissonmelo.contactapit.repository.ContactRepository;
import com.talissonmelo.contactapit.service.exception.EntityNotFoundException;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ContactService {

	private final ContactRepository repository;

	public Contact save(Contact contact) {
		contact.resetFavorite();
		return repository.save(contact);
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new EntityNotFoundException("Contato de não encontrado!.");
		}
	}

	public Contact findById(Long id) {
		return repository.findById(id)
				.orElseThrow(() -> new EntityNotFoundException("Contato de Id: " + id + ",não encontrado"));
	}

	public void favorite(Long id) {
		Contact contact = findById(id);
		contact.addFavorite();
		repository.save(contact);
	}
	
	public void resetFavorite(Long id) {
		Contact contact = findById(id);
		contact.resetFavorite();
		repository.save(contact);
	}

}
