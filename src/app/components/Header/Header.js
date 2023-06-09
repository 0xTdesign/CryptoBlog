"use client";
import React from "react";
import "./Header.css";
import { useState } from "react";
import Image from "next/image";
import logo from "public/Image/logo.png";

export default function Header() {
  return (
    <nav className="nav">
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="menu">
        <Image className="logo" src={logo} alt="logo" />

        <li className="menu-item">
          <a href="/">Home</a>
        </li>
        <li className="menu-item">
          <a href="/about">About</a>
        </li>
        <li className="menu-item">
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
