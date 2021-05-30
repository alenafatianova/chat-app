import React from 'react'
import './Message.scss'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export type MessageProps = {
    avatar: string
    textMessage: string
    date: number | Date,
    isMe: boolean,
    isRead: boolean,
    attachments?: Array<AttachmentType>
    user: UserType
}
type UserType = {
    name: string,
    surname: string
}
type AttachmentType = {
    fileName: string
    url: string
    id: string
}

export const Message:React.FC<MessageProps> = ({avatar, textMessage, date, user, attachments}) => {
    const dateTime = format(date, "hh:mm a dd/MM/yy", {locale: ru})
   
    return (
        <>
         <div className='message__item__container'>
               <div className='message__avatar'>
                    <img className='user__avatar__icon' src={avatar} alt={`Avatar ${user.name && user.surname}`} />
               </div>
               <div className='user__text__message__content'>
                <div className='message__info'>
                <div className='user__text__message__bubble'>
                       
                       <p className='text__message'>{textMessage}</p>
                  </div>
                
                  <div className="message__attachments">
                        { attachments && attachments.map((attachment) => {
                               return  <div key={attachment.id} className="message__attachments__item">
                                    <img src={attachment.url} alt={attachment.fileName} />
                                </div>
                            })
                        }
                  </div>
                  <span className='message__date'>{dateTime}</span>
                </div>
               </div>
            </div> 
        </>
    )
}
