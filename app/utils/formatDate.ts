export default function (date: string, locale: string) {
  const dateLocale = locale === "en" ? "en-us" : "pt-br";

  return new Intl.DateTimeFormat(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(date.replace("T00:00:00", "T12:00:00")));
}
