import React from 'react'
import './Message.scss'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'


type MessageProps = {
    avatar: string
    textMessage: string
    date: string
    user: {
        name: string,
        surname: string
    }
}

export const Message:React.FC<MessageProps> = ({avatar, textMessage, date, user}) => {
   
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
                   <span className='message__date'>{formatDistanceToNow(new Date, {addSuffix: true, locale: ruLocale})}</span>
               </div>
            </div> 
        </>
    )
}
