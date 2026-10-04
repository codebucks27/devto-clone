import { act, fireEvent, render, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { classQueries, screen } from "./testQueries";

const articles = [
  {
    title: "A mocked React article",
    cover_image: "https://example.test/cover.jpg",
    tag_list: ["react", "webdev"],
    url: "https://example.test/articles/react",
    comments_count: 2,
    positive_reactions_count: 3,
    public_reactions_count: 4,
    user: {
      username: "testauthor",
      profile_image_90: "https://example.test/avatar.jpg",
    },
    published_at: "2026-10-04T10:00:00.000Z",
  },
  {
    title: "An article without a cover or comments",
    cover_image: null,
    tag_list: ["javascript"],
    url: "https://example.test/articles/javascript",
    comments_count: 0,
    positive_reactions_count: 0,
    public_reactions_count: 0,
    user: {
      username: "anotherauthor",
      profile_image_90: "https://example.test/another-avatar.jpg",
    },
    published_at: "2026-10-04T11:00:00.000Z",
  },
];

async function finishInitialDelay() {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(2000);
  });
}

describe("App", () => {
  let fetchMock;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-04T12:00:00.000Z"));
    fetchMock = vi.fn().mockResolvedValue({
      json: async () => articles,
    });
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    // Content's existing loading timeout must not escape into real timers.
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("keeps the app shell and five loading placeholders until the two-second fetch", async () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Posts" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "search" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Write a post" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/home");
    expect(screen.getByRole("heading", { name: "Listings" })).toBeInTheDocument();
    expect(screen.queryAllByClassName("skeleton-wrapper")).toHaveLength(5);
    expect(fetchMock).not.toHaveBeenCalled();

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1999);
    });

    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.queryAllByClassName("skeleton-wrapper")).toHaveLength(5);

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1);
    });

    expect(fetchMock).toHaveBeenCalledExactlyOnceWith("https://dev.to/api/articles");
    expect(screen.getByRole("heading", { name: articles[0].title })).toBeInTheDocument();
    expect(screen.queryAllByClassName("skeleton-wrapper")).toHaveLength(0);
  });

  it("renders the fetched article links, cover, tags, counts, and empty-comment state", async () => {
    render(<App />);
    await finishInitialDelay();

    const [firstArticle, secondArticle] = screen.getAllByRole("article");
    expect(within(firstArticle).getByRole("link", { name: articles[0].title })).toHaveAttribute("href", articles[0].url);
    expect(within(firstArticle).getByRole("link", { name: "testauthor" })).toHaveAttribute("href", "http://dev.to/testauthor");
    expect(within(firstArticle).getByRole("link", { name: "#react" })).toHaveAttribute("href", "https://dev.to/t/react");
    expect(within(firstArticle).getByRole("link", { name: "7 reactions" })).toHaveAttribute("href", articles[0].url);
    expect(within(firstArticle).getByRole("link", { name: "2 comments" })).toHaveAttribute("href", articles[0].url);
    expect(within(firstArticle, classQueries).getByClassName("article__image")).toHaveStyle({ backgroundImage: 'url("https://example.test/cover.jpg")' });
    expect(within(secondArticle, classQueries).queryByClassName("article__image")).not.toBeInTheDocument();
    expect(within(secondArticle).getByText("Add comment")).toBeInTheDocument();
    expect(within(secondArticle).queryByText("reactions")).not.toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(2);
  });

  it("appends the same feed on each bottom scroll and keeps the already-rendered articles", async () => {
    render(<App />);
    await finishInitialDelay();

    vi.stubGlobal("innerHeight", 800);
    vi.stubGlobal("pageYOffset", 799);
    vi.spyOn(document.documentElement, "scrollHeight", "get").mockReturnValue(1600);

    fireEvent.scroll(window);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(screen.getAllByRole("article")).toHaveLength(2);

    vi.stubGlobal("pageYOffset", 800);
    fireEvent.scroll(window);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(0);
    });

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(screen.getAllByRole("article")).toHaveLength(4);
    expect(screen.getAllByRole("heading", { name: articles[0].title })).toHaveLength(2);

    fireEvent.scroll(window);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(0);
    });

    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(fetchMock.mock.calls).toEqual([
      ["https://dev.to/api/articles"],
      ["https://dev.to/api/articles"],
      ["https://dev.to/api/articles"],
    ]);
    expect(screen.getAllByRole("article")).toHaveLength(6);
    expect(screen.getAllByRole("heading", { name: articles[1].title })).toHaveLength(3);
  });

  it("opens and closes the profile menu while preserving its destinations", () => {
    render(<App />);
    const profile = screen.getByRole("img", { name: "Profile Pictrure" });
    const menu = screen.getByClassName("dropdown-menu-close");

    expect(menu).toHaveClass("dropdown-menu-close");
    fireEvent.click(profile);
    expect(menu).toHaveClass("dropdown-menu");
    expect(within(menu).getByRole("link", { name: "CodeBucks @codebucks" })).toHaveAttribute("href", "/profile");
    expect(within(menu).getByRole("link", { name: "Dashboard" })).toHaveAttribute("href", "/dashboard");
    expect(within(menu).getByRole("link", { name: "Signout" })).toHaveAttribute("href", "/signout");

    const dashboard = within(menu).getByRole("link", { name: "Dashboard" });
    dashboard.addEventListener("click", (event) => event.preventDefault(), { once: true });
    fireEvent.click(dashboard);
    expect(menu).toHaveClass("dropdown-menu-close");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("opens and closes the mobile sidebar and reveals the extra sidebar links", () => {
    render(<App />);
    const sidebar = screen.getByClassName("leftBar");
    const extraLinks = within(sidebar, classQueries).getByClassName("list");
    const socialLinks = within(sidebar, classQueries).getByClassName("leftBar__social");

    expect(extraLinks).toHaveClass("hidden");
    expect(socialLinks).toHaveClass("hidden");
    fireEvent.click(within(sidebar).getByRole("link", { name: "More..." }));
    expect(extraLinks).not.toHaveClass("hidden");
    expect(socialLinks).not.toHaveClass("hidden");
    expect(within(extraLinks).getByRole("link", { name: "Code of Conduct" })).toHaveAttribute("href", "/code");

    fireEvent.click(screen.getByClassName("headerContainer__hamburgerMenu"));
    const drawer = screen.getByClassName("hamburger__content");
    expect(within(drawer).getByRole("heading", { name: "DEV Community" })).toBeInTheDocument();
    expect(within(drawer).getByRole("link", { name: "Home" })).toHaveAttribute("href", "/home");
    expect(screen.getByClassName("hamburger overlay")).toBeInTheDocument();

    fireEvent.click(within(drawer).getByRole("button"));
    expect(screen.queryByClassName("hamburger__content")).not.toBeInTheDocument();
    expect(screen.queryByClassName("hamburger overlay")).not.toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
