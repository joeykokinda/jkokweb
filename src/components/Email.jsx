import { useEffect, useState } from "react";

// Reversed + base64 so the address never appears literally in HTML or the JS bundle.
// ponytail: stops regex harvesters, not headless-browser scrapers. Use a disposable alias if spam continues.
export const getEmail = () => atob("bW9jLmFkbmlrb2tAag==").split("").reverse().join("");

export default function Email({ className, children }) {
  const [address, setAddress] = useState("");
  useEffect(() => setAddress(getEmail()), []);

  return (
    <a href={address ? `mailto:${address}` : undefined} className={className}>
      {children ?? address.replace("@", " @ ").replace(".", " . ")}
    </a>
  );
}
