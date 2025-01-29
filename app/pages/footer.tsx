"use client";
import React from "react";
import { IconBrandAppstore, IconBrandGooglePlay } from "@tabler/icons-react";
import trade from "../../public/trade.svg"
import Image from "next/image";
import hyro from "../../public/hyrotrader_logo2.svg"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Coaching Name */}
          <h3 className="text-5xl font-bold tracking-wide">SKILLCENTRIC</h3>

          {/* Download Our App Text */}
          <p className="text-2xl text-gray-400">Download our app</p>

          {/* App Store and Play Store Buttons with Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center justify-center bg-gray-800 rounded-lg px-6 py-3 hover:bg-gray-700 transition"
            >
              <IconBrandGooglePlay className="text-3xl mr-2" /> {/* Google Play Icon */}
              <span className="text-lg font-medium">Google Play</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center bg-gray-800 rounded-lg px-6 py-3 hover:bg-gray-700 transition"
            >
              <IconBrandAppstore className="text-3xl mr-2" /> {/* App Store Icon */}
              <span className="text-lg font-medium">App Store</span>
            </a>
          </div>

          {/* Partner Links */}
          <div className="mt-12">
            <p className="text-2xl text-gray-400 mb-6">Our Partners</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              <a
                href="https://www.interactivebrokers.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2"
              >
                <Image
                  src="https://www.interactivebrokers.com/images/common/logos/ibkr/interactive-brokers.svg"
                  alt="Interactive Brokers Logo"
                  height={100}
                  width={100}
                  className=" object-contain"
                />
                <span className="text-lg text-gray-400 hover:text-white transition">
                  Interactive Brokers
                </span>
              </a>
              <a
                href="https://www.bybit.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2"
              >
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCA4NyAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYyLjAwODMgMjUuMzU3MlYzSDY2LjUwMjJWMjUuMzU3Mkg2Mi4wMDgzWiIgZmlsbD0iI0Y3QTYwMCIvPgo8cGF0aCBkPSJNOS42MzQwNyAzMS45OTgzSDBWOS42NDExMUg5LjI0NjY2QzEzLjc0MDYgOS42NDExMSAxNi4zNTkxIDEyLjA5MDMgMTYuMzU5MSAxNS45MjE0QzE2LjM1OTEgMTguNDAxMyAxNC42Nzc0IDIwLjAwMzkgMTMuNTEzNCAyMC41Mzc1QzE0LjkwMjggMjEuMTY1MiAxNi42ODEzIDIyLjU3NzkgMTYuNjgxMyAyNS41NjI0QzE2LjY4MTMgMjkuNzM3MyAxMy43NDA2IDMxLjk5ODMgOS42MzQwNyAzMS45OTgzWk04Ljg5MDk2IDEzLjUzNTVINC40OTM5VjE4LjY4NTJIOC44OTA5NkMxMC43OTgxIDE4LjY4NTIgMTEuODY1MiAxNy42NDg4IDExLjg2NTIgMTYuMTA5NUMxMS44NjUyIDE0LjU3MTkgMTAuNzk4MSAxMy41MzU1IDguODkwOTYgMTMuNTM1NVpNOS4xODE1MSAyMi42MTA0SDQuNDkzOVYyOC4xMDU2SDkuMTgxNTFDMTEuMjE4OSAyOC4xMDU2IDEyLjE4NzQgMjYuODUwMyAxMi4xODc0IDI1LjM0MThDMTIuMTg3NCAyMy44MzUgMTEuMjE3MSAyMi42MTA0IDkuMTgxNTEgMjIuNjEwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMC4zODgyIDIyLjgyOTNWMzEuOTk4M0gyNS45MjZWMjIuODI5M0wxOS4wMDczIDkuNjQxMTFIMjMuODg4NkwyOC4xODg4IDE4LjY1MjdMMzIuNDIzOSA5LjY0MTExSDM3LjMwNTJMMzAuMzg4MiAyMi44MjkzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUwLjA0NTcgMzEuOTk4M0g0MC40MTE2VjkuNjQxMTFINDkuNjU4M0M1NC4xNTIyIDkuNjQxMTEgNTYuNzcwNyAxMi4wOTAzIDU2Ljc3MDcgMTUuOTIxNEM1Ni43NzA3IDE4LjQwMTMgNTUuMDg5IDIwLjAwMzkgNTMuOTI1IDIwLjUzNzVDNTUuMzE0NCAyMS4xNjUyIDU3LjA5MyAyMi41Nzc5IDU3LjA5MyAyNS41NjI0QzU3LjA5MyAyOS43MzczIDU0LjE1MjIgMzEuOTk4MyA1MC4wNDU3IDMxLjk5ODNaTTQ5LjMwMjYgMTMuNTM1NUg0NC45MDU1VjE4LjY4NTJINDkuMzAyNkM1MS4yMDk3IDE4LjY4NTIgNTIuMjc2OCAxNy42NDg4IDUyLjI3NjggMTYuMTA5NUM1Mi4yNzY4IDE0LjU3MTkgNTEuMjA5NyAxMy41MzU1IDQ5LjMwMjYgMTMuNTM1NVpNNDkuNTkzMSAyMi42MTA0SDQ0LjkwNTVWMjguMTA1Nkg0OS41OTMxQzUxLjYzMDUgMjguMTA1NiA1Mi41OTkgMjYuODUwMyA1Mi41OTkgMjUuMzQxOEM1Mi41OTkgMjMuODM1IDUxLjYzMDUgMjIuNjEwNCA0OS41OTMxIDIyLjYxMDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNODAuOTg2IDEzLjUzNTVWMzJINzYuNDkyMVYxMy41MzU1SDcwLjQ3ODVWOS42NDExMUg4Ni45OTk2VjEzLjUzNTVIODAuOTg2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                  alt="Bybit Logo"
                  height={100}
                  width={100}
                  className=" object-contain"
                />
                <span className="text-lg text-gray-400 hover:text-white transition">
                  Bybit
                </span>
              </a>
              <a
                href="https://www.binance.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2"
              >
                <Image
                  src="data:image/png;base64,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"
                  alt="Binance Logo"
                  height={100}
                  width={100}
                  className=" object-contain"
                />
                <span className="text-lg text-gray-400 hover:text-white transition">
                  Binance
                </span>
              </a>
              <a
                href="https://www.tradingview.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2"
              >
                <Image
                  src={trade}
                  height={100}
                  width={100}
                  alt="TradingView Logo"
                  className=" object-contain"
                />
                <span className="text-lg text-gray-400 hover:text-white transition">
                  TradingView
                </span>
              </a>
              <a
                href="https://ftmo.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2"
              >
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZnRtby1sb2dvIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMzkgMzUiPgogICAgPHBhdGgKICAgICAgICAgICAgZD0iTTQ2LjAyNiAyNy4zMjJoMy43NzZ2LTguNjk2aDkuMTEzdi0zLjI3aC05LjExM3YtNC40MDhoMTAuNzlWNy42NDZINDYuMDI2djE5LjY3NnpNNjMuNDc3IDEwLjk0OGg2LjgxM3YxNi4zNzRoMy43NzZWMTAuOTQ4aDYuODEzVjcuNjQ2SDYzLjQ3N3YzLjMwMnpNOTUuODE4IDE3LjUxM0w4OC44NjMgNy43MWwtLjA0OC0uMDY0aC0zLjI1NHYxOS42NzZoMy43NzZWMTQuMjhsMS41MyAyLjM3MyA0Ljc5OCA2Ljg0NS4xMjcuMTc5IDQuODczLTYuOTk4YTQ4LjA1OCA0OC4wNTggMCAwMDEuNjAzLTIuNHYxMy4wMzdoMy43NzZWNy42NDZoLTMuMjU0bC02Ljk3MiA5Ljg2NnpNMTI5LjExIDEwLjI5NGMtMS45NjctMS45NTEtNC40NTEtMi45NDItNy4zODMtMi45NDItMi45MzcgMC01LjQyMS45OTEtNy4zODggMi45NDItMS45NjEgMS45NTctMi45NTggNC4zNzItMi45NTggNy4xOTMgMCAyLjgzNy45OTcgNS4yNjggMi45NTggNy4yMjUgMS45NjIgMS45NTEgNC40NTEgMi45NDIgNy4zODggMi45NDIgMi45MzggMCA1LjQyMi0uOTkxIDcuMzgzLTIuOTQyIDEuOTYyLTEuOTUxIDIuOTU5LTQuMzgyIDIuOTU5LTcuMjI1IDAtMi44MjEtLjk5Ny01LjI0Mi0yLjk1OS03LjE5M3ptLTIuODA1IDExLjk0Yy0xLjIxOCAxLjMwNy0yLjc0OCAxLjk2Ni00LjU0NiAxLjk2Ni0xLjgxOSAwLTMuMzY0LS42NjQtNC41OTMtMS45NjctMS4yMjktMS4zMDgtMS44NTYtMi45MDUtMS44NTYtNC43NTEgMC0xLjg0LjYyMi0zLjQzMyAxLjg1Ni00LjczNiAxLjIyOS0xLjI5NyAyLjc3NC0xLjk1NiA0LjU5My0xLjk1NiAxLjc5OCAwIDMuMzI4LjY1OSA0LjU1MSAxLjk1MSAxLjIyMyAxLjI5NyAxLjg0IDIuODkgMS44NCA0LjczNi0uMDA1IDEuODUtLjYyNyAzLjQ0OC0xLjg0NSA0Ljc1NnpNNC4xMTMgMjEuNjE2TDE3LjQ5NyA4LjIzMlYwTDAgMTcuNTAzbDQuMTEzIDQuMTEzek0xNy40OTcgMzQuOTk2VjIzLjZsLTUuNjk1IDUuNyA1LjY5NSA1LjY5NnpNMTcuNDk4IDExLjY5N2wtMTEuNjUgMTEuNjUgNC4yMTQgNC4yMTMgNy40MzYtNy40MzZ2LTguNDI3ek0xOS42OTEgMHY4LjIzMmw5LjI2NiA5LjI2NS05LjI2NiA5LjI3MVYzNUwzNy4xOSAxNy40OTcgMTkuNjkgMHpNMTM1LjM3LjYzM2MtMS45MTQgMC0zLjQzOCAxLjQ4Ny0zLjQzOCAzLjMzOCAwIDEuODkzIDEuNTI0IDMuMzc1IDMuNDM4IDMuMzc1IDEuOTMgMCAzLjQxNy0xLjQ4NyAzLjQxNy0zLjM3NSAwLTEuODU2LTEuNDgyLTMuMzM4LTMuNDE3LTMuMzM4em0uMDIxIDYuMDAxYy0xLjUwMyAwLTIuNjA1LTEuMTgxLTIuNjA1LTIuNjYzIDAtMS40NjYgMS4wOTctMi42NjMgMi41ODQtMi42NjNzMi41NjMgMS4yMDIgMi41NjMgMi42ODRjMCAxLjQ2LTEuMDc2IDIuNjQyLTIuNTQyIDIuNjQyeiIKICAgICAgICAgICAgZmlsbD0iI2ZmZiIvPgogICAgPHBhdGgKICAgICAgICAgICAgZD0iTTEzNi4xNDUgNC4wN3YtLjA0MmMuNDA2LS4xMjEuNjkxLS40MDYuNjkxLS43NzUgMC0uMzI3LS4xNDItLjU5LS4zMjctLjczMy0uMjQzLS4xNDItLjUyNy0uMjQzLTEuMTYtLjI0My0uNTQ5IDAtLjk3Ni4wNDMtMS4yODIuMXYzLjMzOWguNzc2VjQuMzdoLjM2M2MuNDI4IDAgLjYzMy4xNjMuNjkxLjUyNy4xLjM4NS4xNjQuNjkxLjI2NC44MTJoLjgzM2MtLjA3OS0uMTItLjE0Mi0uMzI3LS4yNDItLjgzMy0uMTAxLS40NDMtLjI4LS42ODUtLjYwNy0uODA3em0tLjkxNy0uMjQ4aC0uMzY0di0uOTU0Yy4wNzktLjAyMS4yMjYtLjA0Mi40MjctLjA0Mi40OSAwIC43MTIuMjA1LjcxMi41MDYgMCAuMzQ4LS4zNDguNDktLjc3NS40OXoiCiAgICAgICAgICAgIGZpbGw9IiNmZmYiLz4KPC9zdmc+"
                  alt="FTMO Logo"
                  height={100}
                  width={100}
                  className=" object-contain"
                />
                <span className="text-lg text-gray-400 hover:text-white transition">
                  FTMO
                </span>
              </a>
              <a
                href="https://www.hyrotrader.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2"
              >
                <Image
                  src={hyro} 
                  alt="HyroTrader Logo"
                  height={100}
                  width={100}
                  className=" object-contain"
                />
                <span className="text-lg text-gray-400 hover:text-white transition">
                  HyroTrader
                </span>
              </a>
            </div>
          </div>

          {/* Copyright Text */}
          <p className="text-3xl text-gray-500 mt-12">
            © 2025 SKILLCENTRIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
