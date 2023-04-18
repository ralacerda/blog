import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function (date: Date) {
  return dayjs(date).locale("pt-BR").utc().format("DD [de] MMMM [de] YYYY");
}
