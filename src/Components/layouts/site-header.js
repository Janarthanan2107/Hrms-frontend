'use client';

import { useState, useRef, useEffect } from "react";

import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import { Bell } from "lucide-react"
import { Button } from "../ui/button";

import { SidebarTrigger } from '../ui/sidebar';

export function NotificationDropdown() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <Button
        onClick={() => setOpen((prev) => !prev)}
        variant="ghost"
        size="icon"
        className="relative rounded-full"
      >
        <Bell className="h-5 w-5 text-muted-foreground" />
        {/* Red dot indicator */}
        <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"></span>
      </Button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-700">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Notifications
            </h3>
            <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
              Mark all as read
            </button>
          </div>

          {/* Notification List */}
          <ul className="max-h-64 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-700">
            <li className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  New message from HR
                </span>
                <span className="text-xs text-gray-500">2 mins ago</span>
              </div>
            </li>

            <li className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  Leave request approved
                </span>
                <span className="text-xs text-gray-500">10 mins ago</span>
              </div>
            </li>

            <li className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  Salary credited 🎉
                </span>
                <span className="text-xs text-gray-500">1 hr ago</span>
              </div>
            </li>
          </ul>

          {/* Footer */}
          <div className="px-4 py-2 text-center bg-gray-50 dark:bg-gray-700">
            <button className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


export default function HeaderDropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center gap-3 relative" ref={menuRef}>
      {/* Avatar / Button */}
      <Button
        onClick={() => setOpen(!open)}
        className="relative h-8 w-8 rounded-full overflow-hidden bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold flex items-center justify-center"
      >
        T
      </Button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-10 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg border p-2 z-50">
          <div className="px-2 py-2 border-b dark:border-b-gray-50/20">
            <p className="text-sm font-medium leading-none">Teena</p>
            <p className="text-xs text-gray-500">Teena@tecnospice.com / HR</p>
          </div>
          <div className="flex flex-col py-1">
            <button className="text-sm px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 text-left rounded">
              Profile
            </button>
            <button className="text-sm px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 text-left rounded">
              Settings
            </button>
          </div>
          <div className="border-t mt-1 pt-1">
            <button className="text-sm px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-500 text-left rounded w-full">
              Log out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">

        {/* Sidebar Trigger (Mobile) */}
        <div className="flex items-center md:hidden">
          <SidebarTrigger />
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9 pr-3 h-9 w-full rounded-lg text-sm focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <NotificationDropdown />
          <HeaderDropdown />
        </div>
      </div>
    </header>
  );
}
