import './list.css'

import UserInfo from './user-info/UserInfo'
import ChatList from './chat-list/ChatList'

const List = () => {
  return (
    <div className='list'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List