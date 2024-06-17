import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function (date: Date) {
  const { locale } = useI18n();
  const dateLocale = locale.value === "pt" ? "pt-BR" : "en-US";

  return dayjs(date).locale(dateLocale).utc().format("DD MMMM YYYY");
}
