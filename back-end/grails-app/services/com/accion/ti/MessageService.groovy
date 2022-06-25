package com.accion.ti

import com.accion.ti.exception.ServiceException
import org.springframework.context.MessageSource
import org.springframework.validation.ObjectError

class MessageService {

    MessageSource messageSource

    String getMessageErrors(Exception exception ){
        String message = "";
        if( exception instanceof grails.validation.ValidationException ){
            message = exception.errors.allErrors.collect { ObjectError error ->
                return messageSource.getMessage(error, Locale.default)
            }.join("<br>")
        }else if(exception instanceof ServiceException){
            message = exception.getMessage();
        } else{
            message = getMessageException( exception.getMessage() )
        }
        return message
    }

    String getMessageException(String messageError){
        return getMessage("default.error.exception", messageError, Locale.default)
    }

    String getMessage(String code, Object... args){
        return messageSource.getMessage(code, args, Locale.default)
    }
}