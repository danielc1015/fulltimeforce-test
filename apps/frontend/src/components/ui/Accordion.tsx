import React, { useState } from "react";

export function Accordion({
  children,
  title,
  className
}: {
  children: React.ReactNode;
  title: string;
  className: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div id="accordion-open" className={className}>
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0  rounded-t-xl focus:ring-4  focus:ring-gray-800 border-gray-700 dark:text-gray-300 bg-blue-950 hover:bg-gray-800"
          >
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              {title}
            </span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        {isOpen && (
          <div
            id="accordion-open-body-1"
            aria-labelledby="accordion-open-heading-1"
          >
            <div className="p-5 border border-b-0 text-gray-500 border-gray-700 bg-gray-900">
              {children}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
