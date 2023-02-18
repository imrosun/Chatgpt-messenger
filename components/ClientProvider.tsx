'use client';

import { Toaster } from "react-hot-toast";

export default function ClientProvider() {
  return (
    <>  {/* fragment */}
        <Toaster position="top-right"/>
        {/* client components */}
    </>
  )
}