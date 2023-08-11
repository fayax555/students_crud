import { Dispatch, SetStateAction } from "react";

type Props = {
  label: string;
  checked: boolean;
  setSubjects: Dispatch<SetStateAction<string[]>>;
};

export function Checkbox({ label, checked, setSubjects }: Props) {
  return (
    <label
      htmlFor={`checkbox-${label}`}
      className={`flex w-full items-center gap-4 rounded-lg border-[1px] border-slate-400 py-3 pl-5 ${
        checked ? "border-violet-600 bg-violet-100" : "border-slate-500"
      }`}
      onMouseDown={(e) => e.preventDefault()}
    >
      <input
        id={`checkbox-${label}`}
        type="checkbox"
        className="h-[25px] w-[25px] self-center"
        onChange={(e) => {
          if (e.target.checked) {
            setSubjects((prev) => [...prev, label]);
          } else {
            setSubjects((prev) => prev.filter((subject) => subject !== label));
          }
        }}
        checked={checked}
      />
      {label}
    </label>
  );
}
