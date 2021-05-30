import React from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { MessageProps } from '../MyMessage/Message'
import './UserMessage.scss'
import readMsg from '../../../assets/doublemarkSVG.svg'
import unreadMsg from '../../../assets/unread.svg'


export const UserMessage: React.FC<MessageProps> = ({avatar, user, date, textMessage, isMe,  isRead, attachments}) => {
    const dateTime = format(date, "hh:mm a dd/MM/yy", {locale: ru})
    return (
        <>
          <div className='user__message__item__container'>
               <div className='user__message__avatar'>
                    <img className='user__avatar__icon' src={avatar} alt={`Avatar ${user.name && user.surname}`} />
               </div>
               <div className='user__text__message__content'>
                   <div className="message__info">
                   <div className='user__text__message__bubble'>
                        <p className='text__message'>{textMessage}</p>
                   </div>
                   <span className='message__date'>{dateTime}</span>
                   <div className="doublemark__icon__block">
                       {isMe && isRead 
                        ? <img className="read__msg" src={readMsg} alt="Message is read icon" />
                        : <img className="unread__msg" src={unreadMsg} alt="Message is unread" />
                       }
                   </div>
                   <div className="message__attachments">
                        {attachments &&  attachments.map((attachment) => {
                               return  <div key={attachment.url} className="message__attachments__item">
                                    <img src={attachment.url} alt={attachment.fileName} />
                                </div>
                            })
                        }
                  </div>
                   </div>
                 
               </div>
            </div>    
        </>
    )
}
