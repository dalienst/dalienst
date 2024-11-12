"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { Suspense } from "react";
import BootstrapClient from "@/providers/BootstrapClient";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Dalienst Oduor | Strategic Business Growth & Technology Consultant
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Dalienst Oduor offers strategic business consulting, digital transformation expertise, and technology solutions to drive growth, efficiency, and innovation. With a passion for impactful solutions, Dalienst provides guidance for businesses navigating modern challenges."
        />
      </head>
      <body className="body">
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
