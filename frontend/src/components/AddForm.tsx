import { useState, type FormEvent, useEffect } from "react";
import { Checkbox } from "./SubjectCheckbox";

import { useParams, useNavigate } from "react-router-dom";

const subjectData = [
  "Math",
  "Physics",
  "Islam",
  "Chemistry",
  "English",
  "Biology",
];

export function AddForm() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [grade, setGrade] = useState("");
  const [school, setSchool] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:8000/api/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFullName(data.full_name);
        setBirthdate(data.birthdate);
        setGrade(data.grade);
        setSchool(data.school);
        setSubjects(data.subjects.split(","));
      });
  }, [id]);

  const resetForm = () => {
    setFullName("");
    setBirthdate("");
    setGrade("");
    setSchool("");
    setSubjects([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const body = JSON.stringify({
      full_name: fullName,
      birthdate,
      grade,
      school,
      subjects: subjects.join(","),
    });

    if (id) {
      fetch(`http://localhost:8000/api/students/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: body,
      })
        .then((res) => {
          if (res.ok) {
            resetForm();
            navigate("/");
          } else {
            alert("Something went wrong");
          }
        })
        .finally(() => setLoading(false));
    } else {
      fetch("http://localhost:8000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      })
        .then((res) => {
          if (res.ok) {
            resetForm();
            navigate("/");
          } else {
            alert("Something went wrong");
          }
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl">{id ? "Edit" : "Add"} a Student</h1>

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
            className="block w-full rounded-md border-2 border-slate-500 px-4 py-2 text-lg"
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
            className="block w-full rounded-md border-2 border-slate-500 px-4 py-2 text-lg"
          />
        </div>
        <div>
          <label htmlFor="grade" className="mb-2 block text-slate-800">
            Grade
          </label>
          <input
            required
            type="number"
            min={1}
            max={12}
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="block w-full rounded-md border-2 border-slate-500 px-4 py-2 text-lg"
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
            className="block w-full rounded-md border-2 border-slate-500 px-4 py-2 text-lg"
          />
        </div>
        <div>
          <label htmlFor="title" className="mb-2 block text-slate-800">
            Subjects
          </label>

          <div className="grid grid-cols-2 gap-3">
            {subjectData.map((subject) => (
              <Checkbox
                key={subject}
                label={subject}
                checked={subjects.includes(subject)}
                setSubjects={setSubjects}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className={`mt-2 block rounded-md  px-4 py-2 text-lg font-semibold text-slate-200 transition ${
            loading
              ? "cursor-not-allowed bg-slate-500"
              : "bg-violet-600 hover:bg-violet-800"
          }`}
        >
          {id && <span>{loading ? "Editing..." : "Edit Student"}</span>}
          {!id && <span>{loading ? "Adding..." : "Add Student"}</span>}
        </button>
      </form>
    </div>
  );
}
