import React from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { MessageProps } from '../MyMessage/Message'
import './UserMessage.scss'
import doubleMark from '../../../assets/doublemarkSVG.svg'


export const UserMessage: React.FC<MessageProps> = ({avatar, user, date, textMessage}) => {
    const dateTime = format(date, "hh:mm a dd/MM/yy", {locale: ru})
    return (
        <>
          <div className='user__message__item__container'>
               <div className='user__message__avatar'>
                    <img className='user__avatar__icon' src={avatar} alt={`Avatar ${user.name && user.surname}`} />
               </div>
               <div className='user__text__message__content'>
                   <div className='user__text__message__bubble'>
                        <p className='text__message'>{textMessage}</p>
                   </div>
                   <span className='message__date'>{dateTime}</span>
                   <div className="doublemark__icon__block">
                     <img className="doublemark__msg" src={doubleMark} alt="Message is read icon" />
                   </div>
               </div>
            </div>    
        </>
    )
}
