'use client';

interface ErrorWrapperProps {
  error: Error;
}

export default function ErrorWrapper({error}: ErrorWrapperProps) {
  return <h1>Oops!!! {error.message}</h1>
} 
