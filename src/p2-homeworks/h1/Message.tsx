import React from 'react'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = ({avatar, message, time, name, ...props}: MessagePropsType) => {
    return (
        <div>
            <img src={avatar} alt={'avatar'} width={'70px'} height={'70px'}/>
            <div>{name}</div>
            <div>{message}</div>
            <div>{time}</div>
        </div>


    )
}
