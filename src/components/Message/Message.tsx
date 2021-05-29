import formatDistance from 'date-fns/esm/fp/formatDistance/index.js'
import React from 'react'
import './Message.scss'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

type MessageProps = {
    avatar: string
    textMessage: string
    dateTime: Date | string
    user: {
        name: string,
        surname: string
    }
}

export const Message:React.FC<MessageProps> = ({avatar, textMessage, user}) => {
  
    const dateTime = format(new Date(), "hh:mm a dd/MM/yy", {locale: ru})
   
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
