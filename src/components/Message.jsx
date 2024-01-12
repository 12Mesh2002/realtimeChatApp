import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { format, isWithinInterval, sub, isYesterday, isToday } from 'date-fns';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <div className ="timestamp">
            {isWithinInterval(message.date.toDate(), { start: sub(new Date(), { minutes: 1 }), end: new Date() })
            ? <span>Just now</span>
            : (isYesterday(message.date.toDate()) || isToday(message.date.toDate()))
              ? <span>{format(message.date.toDate(), 'hh:mm a')}</span>
              : <><span>{format(message.date.toDate(), 'dd/MM/yyyy')}</span><br/><span>{format(message.date.toDate(), 'hh:mm a')}</span></>
            }
        </div>
        {/* <span>
            {isWithinInterval(message.date.toDate(), { start: sub(new Date(), { minutes: 1 }), end: new Date() })
            ? 'just now'
            : (isYesterday(message.date.toDate()) || isToday(message.date.toDate()))
              ? format(message.date.toDate(), 'hh:mm a')
              : format(message.date.toDate(), 'MM/dd/yyyy, hh:mm a')}
        </span> */}

        {/* <span>just now</span> */}
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
        {/* {message.file && <a href={message.file} target="_blank" rel="noopener noreferrer">Download File</a>} */}
      </div>
    </div>
  );
};

export default Message;