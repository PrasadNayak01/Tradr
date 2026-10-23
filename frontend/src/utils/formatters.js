const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatINR = (value) =>
  value == null || Number.isNaN(Number(value))
    ? "—"
    : inr.format(Number(value));

export const formatSignedINR = (value) =>
  value == null || Number.isNaN(Number(value))
    ? "—"
    : `${value >= 0 ? "+" : "-"}${inr.format(Math.abs(Number(value)))}`;

export const formatPercent = (value) =>
  value == null || Number.isNaN(Number(value))
    ? "—"
    : `${value > 0 ? "+" : ""}${Number(value).toFixed(2)}%`;

export const changeColor = (value) =>
  value == null || Number.isNaN(Number(value))
    ? "text-stone-500"
    : value >= 0
      ? "text-emerald-700"
      : "text-rose-600";

export const formatNumber = (value) =>
  value == null || Number.isNaN(Number(value))
    ? "—"
    : Number(value).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
