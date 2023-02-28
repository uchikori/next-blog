import { format, parseISO } from "date-fns";
import { ja } from "date-fns/locale/ja";

export const ConvertDate = (props) => {
  const { dateISO } = props;
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy年MM月dd日", {
        locale: ja,
      })}
    </time>
  );
};
