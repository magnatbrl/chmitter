import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'

const Body = ({user, stats, changeAvatar}) => {
    return (
        <div className='body'>
            <Sidebar changeAvatar={changeAvatar} user={user} stats={stats} />
            <Content />
        </div>
    )
}

export default Body