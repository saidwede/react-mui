'use client'
import React, { useState, useRef, useEffect, ChangeEvent } from 'react';

interface AutoSizedTextareaProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const AutoSizedTextarea: React.FC<AutoSizedTextareaProps> = ({
  value,
  onChange,
  placeholder = 'Ask me anything...',
  className = '',
  onKeyDown
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={`outline-none appearance-none w-full rounded-[30px] bg-[#eeeeee] text-[16px] font-[400] resize-none ${className} placeholder:text-dark-secondary`}
      rows={1}
      style={{ overflow: 'hidden' }}
    />
  );
};

export default AutoSizedTextarea;
