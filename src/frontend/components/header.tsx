import { useState } from "preact/hooks";
import { Link } from "wouter-preact";

import { PinnedArticle } from "./pinned-article.tsx";
import { Routes, type RouteInfo } from "../lib/routes.tsx";

const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-row gap-2 flex-wrap">
        {Routes.map((routeInfo: RouteInfo) => (
          <li key={routeInfo.path}>
            <Link to={routeInfo.path} className="hover:underline">
              {routeInfo.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Header() {
  return (
    <header>
      <div className="flex flex-col p-4 pb-0">
        <h1 className="text-3xl font-bold">LARGEREST</h1>
        <Nav />
      </div>
      <PinnedArticle />
    </header>
  );
}
