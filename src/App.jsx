import './App.css'
import Navigation from './components/Navigation'
import Body from './components/Body'
import { useState } from 'react'
import { TwitterContext } from './utils/context'

function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    })

    const [stats, setStats] = useState({
        followers: 1,
        following: 2
    })

    const changeAvatar = url => {
        setUser(prevState => ({ ...prevState, avatar: url || prevState.avatar }))
    }

    const changeName = name => {
        setUser(prevState => ({ ...prevState, name: name || prevState.name }))
    }

    const changeStats = (statsType, sum) => {
        setStats(stats => {
            let res = stats[statsType] + sum
            res = res < 0 ? 0 : res;
            return { ...stats, [statsType]: res }
        })
    }

    return (
        <div className='app'>
            <TwitterContext.Provider value={{
                user, stats, changeAvatar, changeName, changeStats
            }}>
                <Navigation />
                <Body />
            </TwitterContext.Provider>
        </div>
    )
}

export default App
