import { useSession } from "@clerk/clerk-react";
import { useState } from "react";

const useFetch = (cb, options = {}) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const { session, isLoaded } = useSession(); // isLoaded tells if Clerk finished loading

const fn = async (...args) => {
  if (!isLoaded || !session) {
    console.warn("Session not ready yet");
    return;
  }

  setLoading(true);
  setError(null);

  try {
    const supabaseAccessToken = await session.getToken({
      template: "supabase", // must exist in Clerk dashboard
    });

    if (!supabaseAccessToken) {
      throw new Error("getToken returned undefined. Check your JWT template.");
    }
    const response = await cb(supabaseAccessToken, options, ...args);
    setData(response);
    setError(null); 
    // console.debug(`useFetch successful: ${cb.name}`, response);
  } catch (error) {
    setError(error);
    // console.error(`useFetch error: ${cb.name}`, error);
  } finally {
    setLoading(false);
  }
};

  return { data, loading, error, fn };
};

export default useFetch;
