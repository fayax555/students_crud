import { Link } from "react-router-dom";
import { StudentTable } from "./StudentTable";

export function Home() {
  return (
    <main className="mx-auto max-w-[910px] px-2">
      <h1 className="mt-10 text-center text-3xl">Student Table</h1>
      <div className="flex justify-end">
        <Link
          to="/add"
          className="cursor-pointer rounded-md bg-violet-600 px-4 py-2 text-violet-50 transition hover:bg-violet-800"
        >
          Add Student
        </Link>
      </div>
      <StudentTable />
    </main>
  );
}
