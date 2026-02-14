// Full URL object
const url = new URL(window.location.href);

// -------------------
// 1️⃣ Get path segment
// -------------------
const segments = url.pathname.split("/").filter(Boolean);

// For project page:
// ["yt-embed", "abc"]

const videoId = segments[1]; // ignore repo name

// -------------------
// 2️⃣ Get query params
// -------------------
const start = url.searchParams.get("start");
const end = url.searchParams.get("end");

const iframe = document.querySelector("iframe");

if (iframe && videoId) {
  const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(
    videoId,
  )}?start=${encodeURIComponent(start ?? "0")}&end=${encodeURIComponent(
    end ?? "",
  )}&autoplay=1`;

  iframe.src = embedUrl;
}
