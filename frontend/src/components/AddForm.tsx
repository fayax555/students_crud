import { useState } from "react";

export function AddForm() {
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [grade, setGrade] = useState("");
  const [school, setSchool] = useState("");
  const [subjects, setSubjects] = useState("");
  const [loading, setLoading] = useState(false);

  console.log({ birthdate });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (loading) return;

    console.log({ fullName, birthdate, grade, school, subjects });
  };

  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl">Add a New Student</h1>

      <form
        className="mx-auto mb-20 grid max-w-[500px] gap-5 px-5"
        method="post"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="title" className="mb-2 mt-10 block text-slate-800">
            Full Name
          </label>
          <input
            required
            type="text"
            id="title"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="block  w-[min(100%,60ch)] rounded-md border-2 border-slate-500 px-4 py-2 text-lg"
          />
        </div>
        <div>
          <label htmlFor="birthdate" className="mb-2 block text-slate-800">
            Birthdate
          </label>
          <input
            required
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="block  w-[min(100%,60ch)] rounded-md border-2 border-slate-500 px-4 py-2 text-lg"
          />
        </div>
        <div>
          <label htmlFor="grade" className="mb-2 block text-slate-800">
            Grade
          </label>
          <input
            required
            type="number"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="block  w-[min(100%,60ch)] rounded-md border-2 border-slate-500 px-4 py-2 text-lg"
          />
        </div>
        <div>
          <label htmlFor="school" className="mb-2 block text-slate-800">
            School
          </label>
          <input
            required
            type="text"
            id="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="block  w-[min(100%,60ch)] rounded-md border-2 border-slate-500 px-4 py-2 text-lg"
          />
        </div>
        <div>
          <label htmlFor="title" className="mb-2 block text-slate-800">
            Subjects
          </label>
          <input
            required
            type="text"
            id="title"
            value={subjects}
            onChange={(e) => setSubjects(e.target.value)}
            className="block  w-[min(100%,60ch)] rounded-md border-2 border-slate-500 px-4 py-2 text-lg"
          />
        </div>

        <button
          type="submit"
          className={`mt-2 block rounded-md  px-4 py-2 text-lg font-semibold text-slate-200 transition ${
            loading
              ? "cursor-not-allowed bg-slate-500"
              : "bg-violet-600 hover:bg-violet-800"
          }`}
        >
          {loading ? "Adding..." : "Add Student"}
        </button>
      </form>
    </div>
  );
}
