import React from "react";

import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  className?: string;
  url?: string;
}

export function Card({ children, className, url }: CardProps) {
  return (
    <a
      href={url}
      target="_blank"
      className={"block max-w-3xl p-6 border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" + " "  + className}
    >
      {children}
    </a>
  );
}

export function CardTitle({ children }: CardProps) {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  );
}

export function CardBody({ children }: CardProps) {
  return (
    <p className="font-normal text-gray-700 dark:text-gray-400">{children}</p>
  );
}
