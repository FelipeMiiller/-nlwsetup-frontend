interface HabitProps {
  completed?: number;
}

export function Habit(props: HabitProps) {
  return <p className="flex  bg-black w-10 h-10  text-white rounded m-2 text-center justify-center ">{props.completed}</p>;
}
