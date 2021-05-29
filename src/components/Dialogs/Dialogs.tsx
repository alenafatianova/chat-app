import React, {useState} from 'react'
import { Message } from '../Message/MyMessage/Message'
import { UserMessage } from '../Message/UserMessage/UserMessage'
import './Dialogs.scss'


export const Dialogs = () => {

    const me = {
        name: 'Petr',
        surname: 'Петров'
    }
    const notMe = {
        name: 'Ivan',
        surname: 'Ivanov'
    }
    return (
        <>
         <div className="messages__container">
             <Message 
                user={me}
                avatar='https://image.flaticon.com/icons/png/512/194/194938.png' 
                textMessage='Привет!) Ты знаешь что-то про сайт Randewoo? Нашла у одного блогера...' 
                date={new Date(2021, 5, 29, 22, 23, 14 )}
                isMe={true}
                isRead={true}
                />

                <UserMessage 
                    user={notMe} 
                    textMessage="Не....не слышала, а что там?" 
                    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3foOLIFyywPZxD0tOaPCXnsND2mzflXeGQ&usqp=CAU"
                    date={new Date(2021, 5, 29, 23, 23, 14 )}
                    isMe={false}
                    isRead={true}
                />
        </div>   
        </>
    )
}


