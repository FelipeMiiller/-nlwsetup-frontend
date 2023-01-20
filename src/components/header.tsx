import { Plus } from "phosphor-react";
import logoImage from "../assets/logo.svg";
export function Header() {
  return (
    <div className="w-full max-w-3xl mx-ato flex items-center justify-between">
      <img src={logoImage} alt="" />

      <button
        type="reset"
        className="group border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 hover:text-violet-200"
      >
        <Plus
          size={20}
          className="text-violet-500 group-hover:text-violet-300"
        />
        Novo Habito
      </button>
    </div>
  );
}
