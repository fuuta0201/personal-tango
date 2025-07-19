"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0 w-10">
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="#111827"
                  stroke="#4F46E5"
                  strokeWidth="4"
                />
                <path
                  d="M35 65 V35 H55 Q65 35 65 45 Q65 55 55 55 H45"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M60 70 V45 M60 45 H75"
                  stroke="#4F46E5"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-2xl font-bold tracking-tight text-gray-900 ml-8">
              Personal Tango
            </p>
          </div>
          <div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3">
                <div>
                  <button
                    id="user-menu-button"
                    type="button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 cursor-pointer"
                    onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      className="size-8 rounded-full"
                    />
                  </button>
                </div>

                {isOpenDropDown && (
                  <div
                    role="menu"
                    tabIndex={-1}
                    aria-labelledby="user-menu-button"
                    aria-orientation="vertical"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden"
                  >
                    <Link
                      id="user-menu-item-2"
                      role="menuitem"
                      href="#"
                      tabIndex={-1}
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Dashboard
                    </Link>
                    <Link
                      id="user-menu-item-2"
                      role="menuitem"
                      href="#"
                      tabIndex={-1}
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Sign out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
