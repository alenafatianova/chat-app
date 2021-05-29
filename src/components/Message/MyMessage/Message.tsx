import React, {useState} from 'react'
import './Message.scss'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export type MessageProps = {
    avatar: string
    textMessage: string
    date: number | Date 
    user: {
        name: string,
        surname: string
    }
}

export const Message:React.FC<MessageProps> = ({avatar, textMessage,date, user}) => {
  
    const dateTime = format(date, "hh:mm a dd/MM/yy", {locale: ru})
   
    return (
        <>
         <div className='message__item__container'>
               <div className='message__avatar'>
                    <img className='user__avatar__icon' src={avatar} alt={`Avatar ${user.name && user.surname}`} />
               </div>
               <div className='user__text__message__content'>
                   <div className='user__text__message__bubble'>
                        <p className='text__message'>{textMessage}</p>
                   </div>
                   <span className='message__date'>{dateTime}</span>
               </div>
            </div> 
        </>
    )
}
