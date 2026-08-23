/* DeskFit calculator + honest affiliate link handling.
 *
 * HOW MONETIZATION WORKS
 * ----------------------
 * Set AMAZON_TAG below to your Amazon Associates tracking ID (e.g. "yoursite-20").
 * While it is empty, every product link points to an ordinary Amazon search so the
 * site stays fully useful to visitors. Once you add your tag, the same links are
 * automatically converted into affiliate links. No other changes needed.
 */
const AMAZON_TAG = "";

function amazonLink(query) {
  const base = "https://www.amazon.com/s?k=" + encodeURIComponent(query);
  return AMAZON_TAG ? base + "&tag=" + encodeURIComponent(AMAZON_TAG) : base;
}

// Convert every <a data-aff="search phrase"> on the page.
document.querySelectorAll("a[data-aff]").forEach((a) => {
  a.href = amazonLink(a.getAttribute("data-aff"));
});

function fmt(cm) {
  const inches = cm / 2.54;
  return {
    cm: Math.round(cm),
    inch: Math.round(inches * 10) / 10,
  };
}

function calculate() {
  const raw = document.getElementById("height").value;
  const unit = document.getElementById("unit").value;
  const h = parseFloat(raw);
  if (!h || h <= 0) {
    alert("Please enter your height.");
    return;
  }
  // normalize to centimeters
  const H = unit === "ft" ? h * 30.48 : h;

  const sitLo = fmt(0.40 * H), sitHi = fmt(0.43 * H);
  const stLo = fmt(0.63 * H), stHi = fmt(0.68 * H);
  const chLo = fmt(0.25 * H), chHi = fmt(0.27 * H);
  const eyeLo = fmt(0.60 * H), eyeHi = fmt(0.64 * H);

  const r = (lo, hi) => `${lo.cm}–${hi.cm} cm <span class="alt">(${lo.inch}–${hi.inch} in)</span>`;
  document.getElementById("r-sit").innerHTML = r(sitLo, sitHi);
  document.getElementById("r-stand").innerHTML = r(stLo, stHi);
  document.getElementById("r-chair").innerHTML = r(chLo, chHi);
  document.getElementById("r-monitor").innerHTML = r(eyeLo, eyeHi);

  const res = document.getElementById("results");
  res.classList.add("show");
  res.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("calc-btn");
  if (btn) btn.addEventListener("click", calculate);
  const inp = document.getElementById("height");
  if (inp) inp.addEventListener("keydown", (e) => { if (e.key === "Enter") calculate(); });
});
