import React, { useState } from 'react';
import { conversations } from '../data/conversations';
import { users } from '../data/users';
import { songs } from '../data/songs';

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);

  const getParticipant = (conversation) => {
    // In a real app, the current user would be dynamic
    const currentUserId = 2; // Assuming Marco is the current user for example
    const participantId = conversation.messages.find(m => m.sender !== currentUserId)?.sender;
    return users.find(u => u.id === participantId);
  };

  const ChatView = ({ chat, onBack }) => {
    const participant = users.find(u => u.id === chat.userId);
    return (
      <div className="flex h-full w-full flex-col bg-background-dark text-white md:h-screen md:overflow-y-auto">
        {/* Chat Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-background-dark/80 p-4 backdrop-blur-sm">
          <button onClick={onBack} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-transparent text-text-main-dark md:hidden">
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="relative">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{ backgroundImage: `url("${participant.avatar}")` }}></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background-dark bg-green-500"></div>
            </div>
            <div className="flex flex-col">
              <p className="text-text-main-dark text-lg font-bold leading-tight font-display">{participant.username}</p>
              <p className="text-text-secondary-dark text-sm font-normal leading-tight font-body">en línea</p>
            </div>
          </div>
          <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-transparent text-text-main-dark">
            <span className="material-symbols-outlined text-2xl">more_vert</span>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
          {activeChat.messages.map((message) => {
            const song = message.songId ? songs.find(s => s.id === message.songId) : null;
            const isSent = message.sender === 2; // Assuming Marco is the current user
            if (song) {
               return (
                <div key={message.id} className={`flex items-end gap-2 max-w-[80%] ${isSent ? 'self-end' : 'self-start'}`}>
                  <div className="flex flex-col gap-1">
                    <div className="rounded-xl bg-surface-dark-alt p-3 w-64">
                      <div className="flex items-center gap-3">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-md size-12 shrink-0" style={{ backgroundImage: `url("${song.cover}")` }}></div>
                        <div className="flex flex-col min-w-0">
                          <p className="text-text-main-dark font-body font-semibold line-clamp-1">{song.title}</p>
                          <p className="text-text-secondary-dark font-body text-sm line-clamp-1">{song.artist}</p>
                        </div>
                        <button className="ml-auto flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-background-dark">
                          <span className="material-symbols-outlined text-lg">play_arrow</span>
                        </button>
                      </div>
                    </div>
                     <div className={`rounded-b-xl ${isSent ? 'rounded-tl-xl' : 'rounded-tr-xl'} bg-surface-dark-alt p-3`}>
                      <p className="text-text-main-dark font-body text-base leading-snug">{message.text}</p>
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <div key={message.id} className={`flex items-end gap-2 max-w-[80%] ${isSent ? 'self-end' : 'self-start'}`}>
                <div className="flex flex-col gap-1 items-end">
                   <div className={`rounded-t-xl ${isSent ? 'rounded-bl-xl bg-primary' : 'rounded-br-xl bg-surface-dark-alt'} p-3`}>
                    <p className={`${isSent ? 'text-background-dark' : 'text-text-main-dark'} font-body text-base leading-snug`}>{message.text}</p>
                  </div>
                  {isSent && <p className="text-text-secondary-dark text-xs">{message.timestamp}</p>}
                </div>
              </div>
            )
          })}
           <div className="flex items-end gap-2 max-w-[80%] self-start">
            <div className="rounded-full bg-surface-dark-alt py-3 px-4 flex items-center gap-1.5">
              <span className="size-2 animate-[bounce_1s_infinite] rounded-full bg-text-secondary-dark"></span>
              <span className="size-2 animate-[bounce_1s_infinite_200ms] rounded-full bg-text-secondary-dark [animation-delay:0.2s]"></span>
              <span className="size-2 animate-[bounce_1s_infinite_400ms] rounded-full bg-text-secondary-dark [animation-delay:0.4s]"></span>
            </div>
          </div>
        </div>

        {/* Input Bar */}
        <div className="sticky bottom-0 flex items-center gap-2 bg-background-dark p-4">
          <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-primary hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
          </button>
          <div className="relative flex-1">
            <input className="w-full rounded-full border-none bg-surface-dark py-3 pl-5 pr-24 text-text-main-dark placeholder-text-secondary-dark focus:ring-2 focus:ring-primary font-body text-base" placeholder="Escribe un mensaje..." type="text"/>
            <div className="absolute inset-y-0 right-2 flex items-center gap-1">
              <button className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary-dark hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
              </button>
            </div>
          </div>
          <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-background-dark">
            <span className="material-symbols-outlined text-3xl">send</span>
          </button>
        </div>
      </div>
    );
  }

  const ConversationList = ({ onSelectChat }) => (
    <div className="flex h-full w-full flex-col bg-background-dark text-white md:h-screen md:overflow-y-auto">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex flex-col bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center p-4 pb-3 justify-between">
          <div className="flex size-12 shrink-0 items-center justify-start">
            <span className="material-symbols-outlined text-text-main-dark text-3xl">search</span>
          </div>
          <h1 className="text-text-main-dark text-xl font-bold font-display tracking-tight flex-1 text-center">Mensajes</h1>
          <div className="flex w-12 items-center justify-end">
            <button className="flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-transparent text-text-main-dark min-w-0 p-0">
              <span className="material-symbols-outlined text-3xl">add</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lista de Conversaciones */}
      <div className="flex flex-col gap-1 px-2 pt-2 pb-4">
        {conversations.map((convo) => {
          const participant = getParticipant(convo);
          const lastMessage = convo.messages[convo.messages.length - 1];
          const unreadCount = convo.id === 1 ? 1 : convo.id === 4 ? 3 : 0; // Example unread counts
          return (
            <div key={convo.id} onClick={() => onSelectChat(convo)} className="flex cursor-pointer items-center gap-4 rounded-lg px-4 min-h-[80px] py-2 justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4 min-w-0">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0" style={{ backgroundImage: `url("${participant.avatar}")` }}></div>
                <div className="flex flex-col justify-center min-w-0">
                  <p className="text-text-main-dark text-lg font-medium leading-tight line-clamp-1 font-display">{participant.username}</p>
                  <p className="text-text-secondary-dark text-sm font-normal leading-normal line-clamp-1 font-body">{lastMessage.text}</p>
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-end gap-1">
                <p className={`${unreadCount > 0 ? 'text-primary' : 'text-text-secondary-dark'} text-xs font-medium font-body`}>{lastMessage.timestamp}</p>
                {unreadCount > 0 && <div className="flex size-6 items-center justify-center rounded-full bg-primary text-background-dark text-xs font-bold">{unreadCount}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="md:grid md:grid-cols-3 lg:grid-cols-4 h-screen">
      <div className="hidden md:block md:col-span-1 lg:col-span-1 border-r border-surface-dark">
        <ConversationList onSelectChat={setActiveChat} />
      </div>
      <div className="md:col-span-2 lg:col-span-3">
        {activeChat ? (
          <ChatView chat={activeChat} onBack={() => setActiveChat(null)} />
        ) : (
          <div className="hidden md:flex h-full flex-col items-center justify-center text-text-secondary-dark">
            <span className="material-symbols-outlined text-6xl mb-4">chat</span>
            <p>Selecciona un chat para empezar a mensajear</p>
          </div>
        )}
      </div>
       <div className="md:hidden">
        {activeChat ? <ChatView chat={activeChat} onBack={() => setActiveChat(null)} /> : <ConversationList onSelectChat={setActiveChat} />}
      </div>
    </div>
  );
};

export default Chat;
