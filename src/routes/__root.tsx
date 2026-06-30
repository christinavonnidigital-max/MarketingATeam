import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  Link,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CallRescue — AI-Powered Revenue Automation for SA Home Services" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-b dark:bg-gray-950 dark:border-gray-800">
          <Link to="/" className="text-xl font-bold tracking-tight">
            CallRescue
          </Link>
          <div className="flex gap-6 text-sm font-medium">
            <Link
              to="/demo"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Demo
            </Link>
            <Link
              to="/pricing"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Pricing
            </Link>
            <a
              href="mailto:hello@channelready.com"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>

        <Outlet />

        {/* Footer */}
        <footer className="px-6 py-12 bg-white border-t dark:bg-gray-950 dark:border-gray-800">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to="/" className="text-xl font-bold">
              CallRescue
            </Link>
            <p className="text-sm text-gray-500">
              © 2026 CallRescue. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-sm text-gray-400">
                Missed Call Recovery • AI Chatbots • Lead Capture
              </span>
            </div>
          </div>
        </footer>
      </div>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
