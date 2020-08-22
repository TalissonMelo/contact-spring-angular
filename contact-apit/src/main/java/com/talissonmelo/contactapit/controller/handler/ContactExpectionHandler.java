package com.talissonmelo.contactapit.controller.handler;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.talissonmelo.contactapit.service.exception.EntityNotFoundException;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@ControllerAdvice
public class ContactExpectionHandler {

	@ExceptionHandler(EntityNotFoundException.class)
	public ResponseEntity<String> entityNotFound(EntityNotFoundException e, HttpServletRequest request){
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());	
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> validation(MethodArgumentNotValidException ex){
		BindingResult bindingResult = ex.getBindingResult();
		List<String> message = bindingResult.getAllErrors()
			.stream()
			.map(objectError -> objectError.getDefaultMessage())
			.collect(Collectors.toList());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new StandardError(message));
	}
	
	@AllArgsConstructor
	@Setter
	@Getter
	public class StandardError {
		private List<String> messages;
		
		public StandardError(String message) {
			this.messages = Arrays.asList(message);
		}
	}
	
}
