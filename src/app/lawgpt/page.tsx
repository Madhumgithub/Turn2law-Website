
"use client";

// Simple skeleton loader component
function SkeletonLoader() {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <div className="h-3 rounded bg-neutral-400/60 animate-pulse" style={{ width: '80%' }} />
      <div className="h-3 rounded bg-neutral-400/40 animate-pulse" style={{ width: '60%' }} />
      <div className="h-3 rounded bg-neutral-400/50 animate-pulse" style={{ width: '70%' }} />
      <div className="h-3 rounded bg-neutral-400/30 animate-pulse" style={{ width: '40%' }} />
      <div className="h-3 rounded bg-neutral-400/20 animate-pulse" style={{ width: '30%' }} />
    </div>
  );
}

import React, { useRef, useEffect, useState } from "react";
import Header from '@/components/layout/header';
// Custom LawGPT Sidebar
function LawGPTSidebar({ onClose }: { onClose: () => void }) {
  const mockChats = [
    "Chat title",
    "Chat title",
    "Chat title",
    "Chat title",
    "Chat title",
    "Chat title",
    "Chat title"
  ];
  return (
    <div className="fixed top-0 left-0 h-screen w-[340px] z-[100] bg-[#202020] border-r border-[#232323] flex flex-col shadow-2xl" style={{minWidth:340}}>
      {/* Header with LawGPT icon and close button */}
      <div className="flex items-center justify-between px-7 pt-3 pb-2" style={{ minHeight: 56 }}>
        <div className="flex items-center gap-3">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.35028 11.6585C5.38323 9.62556 8.67069 9.61698 10.693 11.6393L14.0619 15.0082L10.7122 18.3579C8.67927 20.3908 5.39181 20.3994 3.36946 18.377L0.000606868 15.0082L3.35028 11.6585Z" fill="#3C9B97" fillOpacity="0.6"/>
            <path d="M18.3581 3.34931C20.391 5.38225 20.3996 8.66971 18.3773 10.6921L15.0084 14.0609L11.6587 10.7112C9.6258 8.6783 9.61722 5.39083 11.6396 3.36848L15.0084 -0.000370287L18.3581 3.34931Z" fill="#3C9B97" fillOpacity="0.6"/>
            <path d="M19.3044 11.6585C21.3373 9.62556 24.6248 9.61698 26.6471 11.6393L30.016 15.0082L26.6663 18.3579C24.6334 20.3908 21.3459 20.3994 19.3236 18.377L15.9547 15.0082L19.3044 11.6585Z" fill="#3C9B97" fillOpacity="0.6"/>
            <path d="M18.4934 19.1696C20.5263 21.2026 20.5033 24.5216 18.4421 26.5828L15.0085 30.0164L11.6588 26.6668C9.62585 24.6338 9.64879 21.3148 11.71 19.2536L15.1437 15.8199L18.4934 19.1696Z" fill="#3C9B97" fillOpacity="0.6"/>
          </svg>
          <span className="font-bold text-2xl text-white/80" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>LawGPT</span>
        </div>
        <button
          onClick={onClose}
          className="ml-2 flex items-center justify-center h-[45px] w-[45px] transition-colors focus:outline-none"
          style={{ boxShadow: 'none', background: 'none', borderRadius: 9999, padding: 0 }}
          aria-label="Close sidebar"
        >
          {/* Double chevron (>>) icon for closing, as provided */}
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.0484 8.0849C17.3881 8.42467 17.3881 8.97551 17.0484 9.31527L11.8635 14.5001L17.0484 19.6849C17.3881 20.0246 17.3881 20.5754 17.0484 20.9153C16.7086 21.255 16.1577 21.255 15.818 20.9153L10.018 15.1153C9.85484 14.9521 9.76318 14.7308 9.76318 14.5001C9.76318 14.2693 9.85484 14.0481 10.018 13.8849L15.818 8.0849C16.1577 7.74514 16.7086 7.74514 17.0484 8.0849Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.2852 8.0849C10.6249 8.42467 10.6249 8.97551 10.2852 9.31527L5.10035 14.5001L10.2852 19.6849C10.6249 20.0246 10.6249 20.5754 10.2852 20.9153C9.94542 21.255 9.39456 21.255 9.05481 20.9153L3.25481 15.1153C3.09166 14.9521 3 14.7308 3 14.5001C3 14.2693 3.09166 14.0481 3.25481 13.8849L9.05481 8.0849C9.39456 7.74514 9.94542 7.74514 10.2852 8.0849Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
          </svg>
        </button>
      </div>
      {/* Chat history mockups */}
      <div className="flex-1 overflow-y-auto px-7 pt-6">
        {/* No label, just chat titles */}
        <div className="flex flex-col gap-4">
          {mockChats.map((chat, i) => (
            <div
              key={i}
              className={
                `font-bold text-[1.18rem] text-white flex items-center transition-colors cursor-pointer select-none ` +
                (i === 0
                  ? 'bg-[#3A3A3A] text-white'
                  : 'hover:bg-[#232323] text-white/90')
              }
              style={{
                width: 239,
                height: 42,
                borderRadius: 13,
                paddingLeft: 22,
                paddingRight: 22,
                fontFamily: 'Instrument Sans, sans-serif',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                background: i === 0 ? '#3A3A3A' : 'none',
                display: 'flex',
                alignItems: 'center',
                marginLeft: 0,
                marginRight: 0,
                boxSizing: 'border-box',
              }}
            >
              {chat}
            </div>
          ))}
        </div>
      </div>
      {/* No new chat button at bottom, just spacing */}
      <div className="py-6" />
    </div>
  );
}
import WowAhhAnimation from "./Animation";

// Auto-sizing chat bubble component
function AutoBubble({ message }: { message: string }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [bubbleSize, setBubbleSize] = useState({ width: 120, height: 77 });
  const [pop, setPop] = useState(false);
  const minWidth = 80;
  const maxWidth = 358;
  const padding = 36; // 18px left + 18px right
  const minHeight = 53;
  const maxHeight = 300;

  useEffect(() => {
    if (textRef.current) {
      // 1. Measure width needed for single line (no wrapping)
      textRef.current.style.width = 'auto';
      textRef.current.style.whiteSpace = 'nowrap';
      const singleLineWidth = textRef.current.scrollWidth + padding;

      if (singleLineWidth <= maxWidth) {
        setBubbleSize({ width: Math.max(singleLineWidth, minWidth), height: minHeight });
      } else {
        textRef.current.style.width = maxWidth + 'px';
        textRef.current.style.whiteSpace = 'pre-wrap';
        const wrappedHeight = Math.min(Math.max(textRef.current.scrollHeight + 24, minHeight), maxHeight);
        setBubbleSize({ width: maxWidth, height: wrappedHeight });
      }
      // Pop animation on send
      setPop(true);
      const timeout = setTimeout(() => setPop(false), 180);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <svg
      width={bubbleSize.width}
      height={bubbleSize.height}
      viewBox={`0 0 ${bubbleSize.width} ${bubbleSize.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-auto transition-all duration-300 ${pop ? 'scale-105' : 'scale-100'}`}
      style={{ filter: 'drop-shadow(0 4px 16px rgba(60,155,151,0.18))', borderRadius: 32, transition: 'all 0.3s cubic-bezier(.4,2,.6,1)' }}
    >
      <path d={`M0 28C0 12.536 12.536 0 28 0H${bubbleSize.width-28}C${bubbleSize.width-12.536} 0 ${bubbleSize.width} 12.536 ${bubbleSize.width} 28V${bubbleSize.height-8}C${bubbleSize.width} ${bubbleSize.height-3.582} ${bubbleSize.width-3.582} ${bubbleSize.height} ${bubbleSize.width-8} ${bubbleSize.height}H28C12.536 ${bubbleSize.height} 0 ${bubbleSize.height-12.536} 0 ${bubbleSize.height-28}V28Z`} fill="#3C9B97" fillOpacity="0.8" />
      <foreignObject x="0" y="0" width={bubbleSize.width} height={bubbleSize.height}>
        <div
          ref={textRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: 'white',
            fontWeight: 600,
            fontSize: 20,
            lineHeight: '24px',
            fontFamily: 'Instrument Sans, sans-serif',
            textAlign: 'left',
            wordBreak: 'break-word',
            padding: '0 18px',
            boxSizing: 'border-box',
            overflow: 'hidden',
            whiteSpace: 'pre-wrap',
            borderRadius: 32,
            transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
          }}
        >
          <span style={{width: '100%', display: 'block'}}>{message}</span>
        </div>
      </foreignObject>
    </svg>
  );
}

interface LawGPTHeaderProps {
  onSidebarOpen: () => void;
  sidebarOpen: boolean;
}

function LawGPTHeader({ onSidebarOpen, sidebarOpen }: LawGPTHeaderProps) {
  return (
    <Header
      leftElement={
        <div className="flex items-center relative">
          <button
            className="mr-2 flex items-center focus:outline-none"
            onClick={onSidebarOpen}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            {sidebarOpen ? (
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9516 20.9151C11.6119 20.5753 11.6119 20.0245 11.9516 19.6847L17.1365 14.4999L11.9516 9.31508C11.6119 8.97539 11.6119 8.42458 11.9516 8.0847C12.2914 7.74502 12.8423 7.74502 13.182 8.0847L18.982 13.8847C19.1452 14.0479 19.2368 14.2692 19.2368 14.4999C19.2368 14.7307 19.1452 14.9519 18.982 15.1151L13.182 20.9151C12.8423 21.2549 12.2914 21.2549 11.9516 20.9151Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
                <path fillRule="evenodd" clipRule="evenodd" d="M19.2549 20.9151C18.9151 20.5753 18.9151 20.0245 19.2549 19.6847L24.4397 14.4999L19.2549 9.31508C18.9151 8.97539 18.9151 8.42458 19.2549 8.0847C19.5946 7.74502 20.1455 7.74502 20.4852 8.0847L26.2852 13.8847C26.4484 14.0479 26.54 14.2692 26.54 14.4999C26.54 14.7307 26.4484 14.9519 26.2852 15.1151L20.4852 20.9151C20.1455 21.2549 19.5946 21.2549 19.2549 20.9151Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
              </svg>
            ) : (
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9516 20.9151C11.6119 20.5753 11.6119 20.0245 11.9516 19.6847L17.1365 14.4999L11.9516 9.31508C11.6119 8.97539 11.6119 8.42458 11.9516 8.0847C12.2914 7.74502 12.8423 7.74502 13.182 8.0847L18.982 13.8847C19.1452 14.0479 19.2368 14.2692 19.2368 14.4999C19.2368 14.7307 19.1452 14.9519 18.982 15.1151L13.182 20.9151C12.8423 21.2549 12.2914 21.2549 11.9516 20.9151Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
                <path fillRule="evenodd" clipRule="evenodd" d="M19.2549 20.9151C18.9151 20.5753 18.9151 20.0245 19.2549 19.6847L24.4397 14.4999L19.2549 9.31508C18.9151 8.97539 18.9151 8.42458 19.2549 8.0847C19.5946 7.74502 20.1455 7.74502 20.4852 8.0847L26.2852 13.8847C26.4484 14.0479 26.54 14.2692 26.54 14.4999C26.54 14.7307 26.4484 14.9519 26.2852 15.1151L20.4852 20.9151C20.1455 21.2549 19.5946 21.2549 19.2549 20.9151Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
              </svg>
            )}
          </button>
          {/* Vertical line SVG separator between main logo and green logo (centered between them) */}
          <svg
            width="2"
            height="45"
            viewBox="0 0 2 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'fixed',
              right: -17,
              top: -7,
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Separator"
          >
            <path d="M1 1V44" stroke="#FEFEFE" strokeOpacity="0.4" style={{stroke:'#FEFEFE',strokeOpacity:0.4}} />
          </svg>
          {/* LawGPT green logo absolutely positioned, visually aligned with main logo */}
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'fixed',
              right: -65,
              top: 0,
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingRight: '0px', // visually match header padding
            }}
            aria-label="LawGPT logo"
          >
            <path d="M3.3498 11.6585C5.38274 9.62556 8.6702 9.61698 10.6926 11.6393L14.0614 15.0082L10.7117 18.3579C8.67879 20.3908 5.39132 20.3994 3.36897 18.377L0.000118587 15.0082L3.3498 11.6585Z" fill="#3C9B97" fillOpacity="0.6" />
            <path d="M18.3581 3.35028C20.391 5.38323 20.3996 8.67069 18.3773 10.693L15.0084 14.0619L11.6587 10.7122C9.6258 8.67927 9.61722 5.39181 11.6396 3.36946L15.0084 0.000606276L18.3581 3.35028Z" fill="#3C9B97" fillOpacity="0.6" />
            <path d="M19.3044 11.6585C21.3373 9.62556 24.6248 9.61698 26.6471 11.6393L30.016 15.0082L26.6663 18.3579C24.6334 20.3908 21.3459 20.3994 19.3236 18.377L15.9547 15.0082L19.3044 11.6585Z" fill="#3C9B97" fillOpacity="0.6" />
            <path d="M18.4929 19.1696C20.5258 21.2026 20.5029 24.5216 18.4416 26.5828L15.008 30.0164L11.6583 26.6668C9.62536 24.6338 9.64831 21.3148 11.7096 19.2536L15.1432 15.8199L18.4929 19.1696Z" fill="#3C9B97" fillOpacity="0.6" />
          </svg>
        </div>
      }
    />
  );
}


export default function LawGPTPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiTitle, setAiTitle] = useState<string | null>(null);
  const [aiContent, setAiContent] = useState<string | null>(null);

  const handleSidebarToggle = () => setSidebarOpen((open) => !open);

  const handleSend = () => {
    if (message.trim() !== "") {
      setSentMessage(message);
      setAiTitle(null);
      setAiContent(null);
      setAiLoading(true);
      // Simulate AI reply: set title and show skeleton, then show content
      setTimeout(() => {
        // For demo, just use a simple mapping or fallback
        let title = "AI Response";
        if (message.toLowerCase().includes("copyright")) title = "Copyright Action";
        else if (message.toLowerCase().includes("divorce")) title = "Divorce Law";
        else if (message.toLowerCase().includes("property")) title = "Property Dispute";
        setAiTitle(title);
        setTimeout(() => {
          setAiContent("This is a sample AI-generated answer to your question. Replace this with your actual AI response.");
          setAiLoading(false);
        }, 1800);
      }, 600);
      setMessage("");
    }
  };

  return (
    <>
      <LawGPTHeader onSidebarOpen={handleSidebarToggle} sidebarOpen={sidebarOpen} />
      <WowAhhAnimation />
      {/* Sidebar overlays the page, rest of page remains unchanged */}
      {sidebarOpen && (
        <LawGPTSidebar onClose={() => setSidebarOpen(false)} />
      )}
      {/* Main LawGPT content or sent message box */}
      {!sentMessage ? (
        <div className="relative w-screen h-screen min-h-[720px] bg-background font-body overflow-hidden flex flex-col items-center justify-start pt-48">
          {/* LawGPT Logo and Title */}
          <div className="flex flex-row items-center justify-center gap-3 mb-4">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.35028 11.6585C5.38323 9.62556 8.67069 9.61698 10.693 11.6393L14.0619 15.0082L10.7122 18.3579C8.67927 20.3908 5.39181 20.3994 3.36946 18.377L0.000606868 15.0082L3.35028 11.6585Z" fill="#3C9B97" fillOpacity="0.6"/>
              <path d="M18.3581 3.34931C20.391 5.38225 20.3996 8.66971 18.3773 10.6921L15.0084 14.0609L11.6587 10.7112C9.6258 8.6783 9.61722 5.39083 11.6396 3.36848L15.0084 -0.000370287L18.3581 3.34931Z" fill="#3C9B97" fillOpacity="0.6"/>
              <path d="M19.3044 11.6585C21.3373 9.62556 24.6248 9.61698 26.6471 11.6393L30.016 15.0082L26.6663 18.3579C24.6334 20.3908 21.3459 20.3994 19.3236 18.377L15.9547 15.0082L19.3044 11.6585Z" fill="#3C9B97" fillOpacity="0.6"/>
              <path d="M18.4934 19.1696C20.5263 21.2026 20.5033 24.5216 18.4421 26.5828L15.0085 30.0164L11.6588 26.6668C9.62585 24.6338 9.64879 21.3148 11.71 19.2536L15.1437 15.8199L18.4934 19.1696Z" fill="#3C9B97" fillOpacity="0.6"/>
            </svg>
            <span className="font-semibold text-[20px] leading-6 text-white/60" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>LawGPT</span>
          </div>
          {/* Heading */}
          <h1 className="font-bold text-[40px] leading-[48px] text-white mb-8 text-center" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>What can I help with</h1>
          {/* Chatbox */}
          <div className="bg-[#232323] rounded-[28px] flex items-center relative mx-auto p-5">
            <textarea
              className="w-[480px] h-[72px] px-2 bg-transparent border-none outline-none text-white font-medium text-[18px] leading-[22px] z-20 box-border resize-none"
              placeholder="Ask me anything about law"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={2}
            />
            {/* Send Button */}
            <button
              className="absolute right-3 bottom-3 w-9 h-9 bg-white rounded-full border-none flex items-center justify-center cursor-pointer z-30 shadow-none p-0"
              aria-label="Send"
              onClick={handleSend}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="none" />
                <path d="M12 17V7M12 7L7 12M12 7L17 12" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-screen h-screen min-h-[720px] bg-background font-body overflow-hidden flex flex-col items-center justify-start pt-32">
          {/* Sent message bubble at top right */}
          <div className="fixed top-32 right-64 z-50 flex flex-col items-end pointer-events-none">
            <AutoBubble message={sentMessage} />
          </div>
          {/* AI reply area */}
          <div className="w-full max-w-4xl mx-auto mt-12 px-8">
            {aiTitle && (
              <h2 className="text-white text-[2.5rem] font-bold mb-6" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{aiTitle}</h2>
            )}
            {aiLoading && <SkeletonLoader />}
            {aiContent && !aiLoading && (
              <div className="mt-6 text-white/90 text-lg leading-7" style={{ fontFamily: 'Instrument Sans, sans-serif' }}>{aiContent}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}


