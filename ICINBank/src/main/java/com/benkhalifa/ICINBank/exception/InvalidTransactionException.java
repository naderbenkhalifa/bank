package com.benkhalifa.ICINBank.exception;

public class InvalidTransactionException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public InvalidTransactionException(String message) {
	        super(message);
	    }

}
