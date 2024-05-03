// InfiniteScroll.jsx
import React, { useRef, useEffect } from 'react';

const InfiniteScroll = ({ loadMore }) => {
  // Reference to the scroll container
  const scrollRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0 // Trigger when the element is fully in view
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Call the loadMore function when the element is in view
        loadMore();
      }
    }, options);

    observer.observe(scrollRef.current);
 // Clean up by disconnecting the observer when the component unmounts
    return () => observer.disconnect();
  }, [loadMore]);

  return <div ref={scrollRef}></div>;
};

export default InfiniteScroll;
