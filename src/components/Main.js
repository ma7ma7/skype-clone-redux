import React from 'react';
import ChatWindow from './ChatWindow';
import Empty from './Empty';
import './Main.css';

function Main({ user, activeUserId }) {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  };
  return <div className='Main'>{renderMainContent()}</div>;
}

export default Main;
