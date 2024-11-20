"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingSpinner from "./LoadingFull";
import { useMyContext } from "../context/ContentContext";

export function NavigationEvents({ children }) {
  const { state, dispatch } = useMyContext();
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    // console.log(url);
    // Simulate loading state change
    dispatch({ type: "REMOVE_DATA" });
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [pathname, searchParams, dispatch]);

  return (
    <>
      {loading && <LoadingSpinner />}
      {children}
    </>
  );
}

export default NavigationEvents;
