import { generateDatesFromYearBeginning } from "../utilits/generate-dates-from-year-beginning";
import { HabitDay } from "./habitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDatesFromYearBeginning();
const miniminSummaryDatesSize = 18 * 7; // 18weeks
const amontOfDaysToFill = miniminSummaryDatesSize - summaryDates.length;
export function SummaryTable() {
  return (
    <div className="w-full flex ">
      <div className="grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={i}
              className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((day) => {
          return <HabitDay key={day.toString()} />;
        })}

        {amontOfDaysToFill > 0 &&
          Array.from({ length: amontOfDaysToFill }).map((__, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed "
              ></div>
            );
          })}
      </div>
    </div>
  );
}
