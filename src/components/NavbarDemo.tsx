"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import "../../src/Navbar.css";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "my-navbar fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow-lg rounded-lg",
        className
      )}
    >
      <Menu setActive={setActive}>
        <img src="/Mass.png" className="w-30 h-auto" />
        <MenuItem setActive={setActive} active={active} item="Features">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Production Ready"
              href="https://www.google.com/"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Secure, compliant reference architectures"
            />
            <ProductItem
              title="Infinitely Extendable"
              href="https://www.google.com/"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Extend the platform with OpenTofu, Terraform, and Helm"
            />
            <ProductItem
              title=" Infrastructure"
              href="https://www.google.com/"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Unified configuration management"
            />
            <ProductItem
              title="Contextual Metrics"
              href="https://www.google.com/"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Infrastructure diagrams as dashboards"
            />
            <ProductItem
              title="Support"
              href="#"
              src="https://via.placeholder.com/150"
              description="VMs, serverless, and containers"
            />
            <ProductItem
              title="CI/CD"
              href="#"
              src="https://via.placeholder.com/150"
              description="Easily integrate infrastructure and application management into your CI/CD system"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {/* Column 1 */}
            <div className="max-w-[200px] break-words">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                SOLUTIONS
              </h3>
              <ul className="space-y-1">
                <li>
                  <HoveredLink href="/developer-self-service">
                    Developer Self Service with a very, very long name
                  </HoveredLink>
                </li>
                <li>
                  <HoveredLink href="/open-tofu">
                    OpenTofu for Enterprise
                  </HoveredLink>
                </li>
                <li>
                  <HoveredLink href="/backstage-alternative">
                    Backstage Alternative
                  </HoveredLink>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="max-w-[200px] break-words">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                CASE STUDIES
              </h3>
              <ul className="space-y-1">
                <li>
                  <HoveredLink href="/aws-to-azure">
                    Mentaware’s Seamless AWS-to-Azure Migration
                  </HoveredLink>
                </li>
                <li>
                  <HoveredLink href="/zero-downtime-deployments">
                    GameStake Achieves Zero-Downtime Deployments
                  </HoveredLink>
                </li>
                <li>
                  <HoveredLink href="/cloud-costs">
                    25% Reduction in Cloud Costs
                  </HoveredLink>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="max-w-[200px] break-words">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                WEBINARS
              </h3>
              <ul className="space-y-1">
                <li>
                  <HoveredLink href="/docker-web-apps">
                    Best Practices for Containerizing Web Apps with Docker
                  </HoveredLink>
                </li>
                <li>
                  <HoveredLink href="/open-tofu-migration">
                    Migrating Existing OpenTofu Modules
                  </HoveredLink>
                </li>
                <li>
                  <HoveredLink href="/massdriver-office-hours">
                    MassDriver Office Hours
                  </HoveredLink>
                </li>
              </ul>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          setActive={() => {}}
          active={active}
          item="Pricing"
        ></MenuItem>
        <MenuItem setActive={() => {}} active={active} item="Blog"></MenuItem>
        <MenuItem setActive={() => {}} active={active} item="Docs"></MenuItem>
        <MenuItem
          setActive={() => {}}
          active={active}
          item="Templates"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Community">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Webinars</HoveredLink>
            <HoveredLink href="/individual">Youtube</HoveredLink>
            <HoveredLink href="/team">Podcast</HoveredLink>
            <HoveredLink href="/enterprise">Slack</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={() => {}}
          active={active}
          item="Sign-in"
        ></MenuItem>
        <button className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Try Free
        </button>
      </Menu>
    </div>
  );
}
