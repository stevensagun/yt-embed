// Full URL object
const url = new URL(window.location.href);

// Get query params
const videoId = url.searchParams.get("videoId") ?? url.searchParams.get("vidoId");
const start = url.searchParams.get("start");
const end = url.searchParams.get("end");

const iframe = document.querySelector("iframe");
const startValueEl = document.querySelector("#start-value");
const endValueEl = document.querySelector("#end-value");

if (startValueEl) startValueEl.textContent = start ?? "-";
if (endValueEl) endValueEl.textContent = end ?? "-";

if (iframe && videoId) {
  const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(
    videoId,
  )}?start=${encodeURIComponent(start ?? "0")}&end=${encodeURIComponent(
    end ?? "",
  )}&autoplay=1`;

  iframe.src = embedUrl;
}
