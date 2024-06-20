export default function (date: Date, locale: string) {
  const dateLocale = locale === "en" ? "en-us" : "pt-br";

  return new Intl.DateTimeFormat(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
