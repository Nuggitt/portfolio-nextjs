"use client";
import { useEffect, useRef, useState } from "react";

export default function ResumeMenuInline({ className = "" }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickAway(e) {
      if (!open) return;
      if (btnRef.current?.contains(e.target)) return;
      if (menuRef.current?.contains(e.target)) return;
      setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClickAway);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClickAway);
    };
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        className={className}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        View Resume
        <svg
          className="ml-2 h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-44 rounded-lg shadow-lg border border-gray-700 bg-gray-800/95 backdrop-blur p-1 z-20"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href="https://jofibo.com/da/s/m3WVtromskGUVgjdtTbD0w"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="block px-3 py-2 text-sm rounded-md text-white hover:bg-blue-600"
            onClick={() => setOpen(false)}
          >
            🇩🇰 Danish
          </a>
          <a
            href="https://jofibo.com/da/s/pYWlKfDU1E2jJCNZUlGq6w"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="block px-3 py-2 text-sm rounded-md text-white hover:bg-blue-600"
            onClick={() => setOpen(false)}
          >
            🇬🇧 English
          </a>
        </div>
      )}
    </div>
  );
}
