import { afterEach, describe, expect, it, vi } from "vitest";
import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";
import reportWebVitals from "./reportWebVitals";

vi.mock("web-vitals", () => ({
  onCLS: vi.fn(),
  onFCP: vi.fn(),
  onINP: vi.fn(),
  onLCP: vi.fn(),
  onTTFB: vi.fn(),
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe("reportWebVitals", () => {
  it("registers the supplied callback with the current web-vitals metrics", async () => {
    const callback = vi.fn();
    reportWebVitals(callback);
    await vi.dynamicImportSettled();

    for (const register of [onCLS, onINP, onFCP, onLCP, onTTFB]) {
      expect(register).toHaveBeenCalledExactlyOnceWith(callback);
    }
  });

  it("leaves measurement disabled when no callback function is supplied", async () => {
    reportWebVitals();
    reportWebVitals("not a function");
    await vi.dynamicImportSettled();

    for (const register of [onCLS, onINP, onFCP, onLCP, onTTFB]) {
      expect(register).not.toHaveBeenCalled();
    }
  });
});
