export default function (date: Date, locale: string) {
  const dateLocale = locale === "en" ? "en-us" : "pt-br";

  return new Date(date).toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
