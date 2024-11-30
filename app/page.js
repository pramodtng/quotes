"use client"
import Quotes from "@/components/Quotes";
import React, { useState, useEffect } from 'react';


export default function Home() {
  const [quote, setQuote] = useState({ quote: "", author: "" });
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': `${process.env.NEXT_PUBLIC_API_KEY}`
        }
      });
      const data = await res.json();
      setQuote(data[0]);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <Quotes data={quote} fetchNextQuote={fetchQuote} loading={loading} />
    </div>
  );
}