import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NavButton = (props) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavLink
          className={({ isActive }) =>
            classNames(
              isActive
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "px-3 py-2 rounded-md text-sm font-medium"
            )
          }
          aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          to={
            "/" +
            (props.itemTitle !== "Home" ? props.itemTitle.toLowerCase() : "")
          }
        >
          {props.itemTitle}
        </NavLink>
      </Suspense>
    </>
  );
};

export const NavButtonMobile = (props) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Disclosure.Button
          className={({ isActive }) =>
            classNames(
              isActive
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "block px-3 py-2 rounded-md text-base font-medium"
            )
          }
        >
          <NavLink
            className={({ isActive }) =>
              classNames(
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block px-3 py-2 rounded-md text-base font-medium"
              )
            }
            to={
              "/" +
              (props.itemTitle !== "Home" ? props.itemTitle.toLowerCase() : "")
            }
            aria-current={({ isActive }) => (isActive ? "page" : undefined)}
          >
            {props.itemTitle}
          </NavLink>
        </Disclosure.Button>
      </Suspense>
    </>
  );
};

export const UserMenuButton = (props) => {
  return (
    <>
      <Menu.Item>
        <Suspense fallback={<div>Loading...</div>}>
          <NavLink
            className={({ isActive }) =>
              classNames(
                isActive ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm text-gray-700"
              )
            }
            to={"/" + props.itemTitle.toLowerCase()}
          >
            {props.itemTitle}
          </NavLink>
        </Suspense>
      </Menu.Item>
    </>
  );
};

export const UserDropdownMenu = (props) => {
  return (
    <>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <UserMenuButton itemTitle="Profile" />
            <UserMenuButton itemTitle="Register" />
            <UserMenuButton itemTitle="Login" />
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
