import React from "react";
import type { Metadata } from "next";
import { roles } from "./work-data";

export const metadata: Metadata = {
  title: "Roles",
  description: "My Roles",
};

export default function Roles() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Roles</h1>
      <div className="space-y-6">
        {roles.map((role, index) => (
          <div className="flex flex-col">
            <div className="w-full flex justify-between items-baseline">
              <span className="text-black dark:text-white font-medium tracking-tight">
                <b>{role.company}</b> - {role.title}
              </span>
              <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {role.year}
              </span>
            </div>
            <p className="prose prose-neutral dark:prose-invert pt-3">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
