const ChatButton = () => (
  <button
    aria-label="Open chat"
    className="fixed bottom-6 right-6 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-[#2b2b2b] text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)]"
  >
    <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.5 5.25A3.25 3.25 0 0 1 7.75 2h8.5a3.25 3.25 0 0 1 3.25 3.25v6.5A3.25 3.25 0 0 1 16.25 15H9.32l-4.1 3.08A.75.75 0 0 1 4 17.48V5.25Zm4 2.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Zm0 3.25a.75.75 0 0 0 0 1.5h5.25a.75.75 0 0 0 0-1.5H8.5Z" />
      <path d="M7.8 17.35h8.45A5.6 5.6 0 0 0 21.86 12v1.9a3.1 3.1 0 0 1-3.1 3.1h-6.21l-4.1 3.08a.75.75 0 0 1-1.2-.6v-2.06c.18-.02.37-.04.55-.07Z" opacity=".85" />
    </svg>
  </button>
);

export default ChatButton;
