"use client";

import InputText from "@/components/common/InputText";
import React, { useState } from "react";

const tabs = [
  { id: "tab-1", label: "BUY" },
  { id: "tab-2", label: "SELL" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const TampermonkeyComp = () => {
  const [activeTab, setActiveTab] = useState<TabId>("tab-1");

  return (
    <main className="min-h-screen bg-(--surface-page) px-4 py-10 text-(--text-primary)">
      <div className="mx-auto w-full max-w-md rounded-xl border border-(--border-default) bg-(--surface-card) p-5 shadow-sm">
        <div className="mb-4 grid grid-cols-2 rounded-lg bg-(--surface-subtle) p-1 gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isBuyTab = tab.id === "tab-1";
            const buyTabClassName = isActive
              ? "bg-green-500 text-emerald-100 shadow-sm"
              : "text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700";
            const sellTabClassName = isActive
              ? "bg-rose-500 text-olive-100 shadow-sm"
              : "text-rose-600 hover:bg-rose-50 hover:text-rose-700";

            return (
              <button
                key={tab.id}
                id={tab.label.toLowerCase()}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isBuyTab ? buyTabClassName : sellTabClassName
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <form key={activeTab} action="" className="space-y-4">
          <p className="text-sm text-(--text-muted)">Typing  {activeTab === "tab-1" ? "BUY" : "SELL"}</p>

          <div>
            <label htmlFor="fname" className="mb-2 block text-sm font-medium">
              First name:
            </label>
            <InputText id="fname" name="fname" />
          </div>

          <div>
            <label htmlFor="lname" className="mb-2 block text-sm font-medium">
              Last name:
            </label>
            <InputText id="lname" name="lname" />
          </div>

          <div>
            <label htmlFor="country" className="mb-2 block text-sm font-medium">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full rounded-lg border border-(--border-strong) bg-(--surface-page) px-3 py-2 text-sm text-(--text-primary) outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring)"
            >
              <option value="">Select a country</option>
              <option value="vn">Việt Nam</option>
              <option value="us">United States</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-(--button-primary-bg) px-4 py-2 text-sm font-medium text-(--text-on-accent) transition-colors hover:bg-(--button-primary-bg-hover)"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default TampermonkeyComp;
