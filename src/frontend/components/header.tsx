import { useState } from "preact/hooks";
import { Link } from "wouter-preact";

import { PinnedArticle } from "./pinned-article.tsx";
import { Routes, type Route } from "../lib/routes.tsx";

export default function Header() {
  return (
    <header>
      <div className="flex flex-col p-4 pb-0">
        <h1 className="text-3xl font-bold">LARGEREST</h1>
        <nav>
          <ul className="flex flex-row gap-2 flex-wrap">
            {Routes.map((route: Route) => (
              <li key={route.path}>
                <Link to={route.path} className="hover:underline">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <PinnedArticle />
    </header>
  );
}
