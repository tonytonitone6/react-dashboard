import React, { useRef, useEffect } from 'react';

import {
  MessageArea,
  ContentItem
} from './styles';

const MessageItem = ({ messages }) => {


  const refList = useRef(null);
  useEffect(() => {
    const height = refList.current.scrollHeight
    refList.current.scrollTo(0, height);
  }, [messages]);

  const onRenderMessage = (item, index) => (
      <ContentItem key={index}>{item}</ContentItem>
    );

  return (
    <MessageArea
      ref={refList}
    >
      {messages.map(onRenderMessage)}
    </MessageArea>
  );

}
export default MessageItem;