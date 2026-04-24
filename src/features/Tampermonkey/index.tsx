"use client";

import InputText from "@/components/common/InputText";
import React, { useMemo, useRef, useState } from "react";

const tabs = [
  { id: "tab-buy", label: "BUY" },
  { id: "tab-sell", label: "SELL" },
] as const;

type TabId = (typeof tabs)[number]["id"];

type SampleProfileOption = {
  id: string;
  label: string;
  userId: number;
  note?: string;
};

type ApiUserResponse = {
  firstName?: string;
  lastName?: string;
  address?: {
    country?: string;
  };
};

const sampleProfileOptions: SampleProfileOption[] = [
  { id: "sample-1", label: "Sample User #1", userId: 1, note: "Auto fill data for BUY tab" },
  { id: "sample-2", label: "Sample User #2", userId: 2, note: "Auto fill data for SELL tab" },
  { id: "sample-3", label: "Sample User #3", userId: 3, note: "Another sample profile" },
];

function mapCountryToOption(country?: string): "" | "vn" | "us" {
  if (!country) {
    return "";
  }

  const normalized = country.toLowerCase();

  if (normalized.includes("viet")) {
    return "vn";
  }

  if (normalized.includes("united states") || normalized.includes("usa")) {
    return "us";
  }

  return "";
}

const TampermonkeyComp = () => {
  const [activeTab, setActiveTab] = useState<TabId>("tab-buy");
  const [selectedSampleId, setSelectedSampleId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [dropdownDisplay, setDropdownDisplay] = useState<"none" | "block">("none");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFetchingSample, setIsFetchingSample] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const selectedSample = sampleProfileOptions.find((option) => option.id === selectedSampleId);

  const filteredOptions = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return sampleProfileOptions;
    }

    return sampleProfileOptions.filter((option) => {
      return (
        option.label.toLowerCase().includes(normalizedSearch) ||
        (option.note?.toLowerCase().includes(normalizedSearch) ?? false)
      );
    });
  }, [searchTerm]);

  const handleSelectProfile = async (option: SampleProfileOption) => {
    setSelectedSampleId(option.id);
    setDropdownDisplay("none");
    setSearchTerm("");
    setFetchError("");

    try {
      setIsFetchingSample(true);
      const response = await fetch(`https://dummyjson.com/users/${option.userId}`);

      if (!response.ok) {
        throw new Error("Cannot fetch sample user data");
      }

      const userData: ApiUserResponse = await response.json();
      setFirstName(userData.firstName ?? "");
      setCountry(mapCountryToOption(userData.address?.country));
    } catch (error) {
      setFetchError(error instanceof Error ? error.message : "Unknown fetch error");
    } finally {
      setIsFetchingSample(false);
    }
  };

  return (
    <main className="min-h-screen bg-(--surface-page) px-4 py-10 text-(--text-primary)">
      <div className="mx-auto w-full max-w-md rounded-xl border border-(--border-default) bg-(--surface-card) p-5 shadow-sm">
        <div className="mb-4 grid grid-cols-2 rounded-lg bg-(--surface-subtle) p-1 gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isBuyTab = tab.id === "tab-buy";
            const buyTabClassName = isActive
              ? "bg-green-500 text-emerald-100 shadow-sm"
              : "text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700";
            const sellTabClassName = isActive
              ? "bg-rose-500 text-olive-100 shadow-sm"
              : "text-rose-600 hover:bg-rose-50 hover:text-rose-700";

            return (
              <button
                key={tab.id}
                id={tab.id}
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

        <form action="" className="space-y-4">
          <p className="text-sm text-(--text-muted)">Typing : Binh|Thanh|us|sell|Sample User #2</p>

          <div>
            <label htmlFor="sample-profile" className="mb-2 block text-sm font-medium">
              Sample profile
            </label>
            <div ref={dropdownRef} className="relative">
              <button
                id="sample-profile"
                type="button"
                aria-haspopup="listbox"
                aria-expanded={dropdownDisplay === "block"}
                onClick={() => setDropdownDisplay((current) => (current === "none" ? "block" : "none"))}
                className="flex w-full items-center justify-between rounded-lg border border-(--border-strong) bg-(--surface-page) px-3 py-2 text-left text-sm text-(--text-primary) outline-none transition-colors focus-visible:ring-2 focus-visible:ring-(--focus-ring)"
              >
                <span className={selectedSample ? "truncate" : "text-(--text-muted)"}>
                  {selectedSample ? selectedSample.label : "Choose one profile to auto-fill"}
                </span>
                <span className="ml-3 text-(--text-muted)">▾</span>
              </button>

              <div
                style={{ display: dropdownDisplay }}
                className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 rounded-xl border border-(--border-default) bg-(--surface-card) p-3 shadow-lg"
              >
                  <div className="mb-3">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      placeholder="Search profile..."
                      className="w-full rounded-lg border border-(--border-strong) bg-(--surface-page) px-3 py-2 text-sm text-(--text-primary) outline-none focus-visible:ring-2 focus-visible:ring-(--focus-ring)"
                    />
                  </div>

                  <div className="max-h-60 overflow-auto">
                    {filteredOptions.length > 0 ? (
                      <ul role="listbox" className="space-y-1">
                        {filteredOptions.map((option) => (
                          <li key={option.id}>
                            <label className="flex w-full cursor-pointer items-start gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-(--surface-subtle)">
                              <input
                                type="radio"
                                name="sampleProfileOption"
                                value={option.id}
                                checked={selectedSampleId === option.id}
                                onChange={() => handleSelectProfile(option)}
                                className="mt-1"
                              />
                              <span className="flex flex-col">
                                <span className="text-sm font-medium text-(--text-primary)">{option.label}</span>
                              </span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="px-3 py-2 text-sm text-(--text-muted)">No profile found</p>
                    )}
                  </div>

                  {isFetchingSample ? <p className="mt-3 text-xs text-(--text-muted)">Loading profile...</p> : null}
                  {fetchError ? <p className="mt-3 text-xs text-(--error)">{fetchError}</p> : null}
                </div>
            </div>
          </div>

          <div>
            <label htmlFor="fname" className="mb-2 block text-sm font-medium">
              First name:
            </label>
            <InputText id="fname" name="fname" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
          </div>

          <div>
            <label htmlFor="lname" className="mb-2 block text-sm font-medium">
              Last name:
            </label>
            <InputText id="lname" name="lname" value={lastName} onChange={(event) => setLastName(event.target.value)} />
          </div>

          <div>
            <label htmlFor="country" className="mb-2 block text-sm font-medium">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
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
