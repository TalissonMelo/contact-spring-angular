package com.talissonmelo.contactapit.assembler;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.talissonmelo.contactapit.entity.Contact;
import com.talissonmelo.contactapit.entity.dto.ContactDto;

@Component
public class ContactModelAssembler {

	@Autowired
	private ModelMapper modelMapper;
	
	public Contact toModel(ContactDto contactDto) {
		return modelMapper.map(contactDto, Contact.class);
	}
	
	public List<Contact> toCollectionModel(List<ContactDto> contacts){
		return contacts.stream().map(contact -> toModel(contact)).collect(Collectors.toList());
	}
}
