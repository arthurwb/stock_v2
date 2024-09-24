import React from "react";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Button, ConfigProvider } from 'antd';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Exchange",
  description: "The Exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AntdRegistry>
        <ConfigProvider
          theme={{
            token: {
              colorTextBase: 'white', // Set base text color
            },
            components: {
              Button: {
                defaultHoverBorderColor: "orange",
                defaultHoverColor: "black"
              }
            }
          }}
        >
          <body className="relative font-mono text-white">{children}</body>
        </ConfigProvider>
      </AntdRegistry>
    </html>
  );
}
