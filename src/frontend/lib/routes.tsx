// Centralized routes configuration for better maintainability

import { Link } from "wouter-preact";

import { HomePage } from "../pages/index.tsx";
import { AboutPage } from "../pages/about.tsx";

export type RouteInfo = {
  label: string;
  path: string;
  component: () => JSX.Element;
};

export const Routes: RouteInfo[] = [
  { label: "Home", path: "/", component: HomePage },
  { label: "About", path: "/about", component: AboutPage },
];
