import React from 'react'
import { Message } from '../Message/Message'
import './Dialogs.scss'



export const Dialogs = () => {

    const user = {
        name: 'Petr',
        surname: 'Петров'
    }
    return (
        <>
         <div>
             this is dialog's page
             <Message 
                user={user}
                avatar='https://image.flaticon.com/icons/png/512/194/194938.png' 
                textMessage='Привет!) Ты знаешь что-то про сайт Randewoo? Нашла у одного блогера...' 
                date={'Вчера, в 21.31'}
            />
        </div>   
        </>
    )
}
