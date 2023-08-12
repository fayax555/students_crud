import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

type Student = {
  id: number;
  full_name: string;
  birthdate: string;
  grade: string;
  school: string;
  subjects: string;
};

export function StudentTable() {
  const [studentData, setStudentData] = useState<Student[]>();

  useEffect(() => {
    fetch("http://localhost:8000/api/students", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudentData(data);
      });
  }, []);

  if (!studentData) return <div>Loading...</div>;

  return (
    <div className="mx-auto mt-4 rounded-md border-[1px] px-2 pb-7">
      <table className="w-full">
        <thead className="border-b-[1px] text-sm text-slate-600">
          <tr className="[&>*]:px-5 [&>*]:text-left [&>*]:font-light">
            <th className="py-2">ID</th>
            <th>Full Name</th>
            <th>Birthdate</th>
            <th>Grade</th>
            <th>School</th>
            <th>Subjects</th>
            <th className="translate-x-2">Action</th>
          </tr>
        </thead>
        <tbody className="translate-y-4 text-slate-700">
          {studentData.map((s) => (
            <tr
              key={s.id}
              className="rounded-md pt-5 hover:bg-slate-100 [&>*]:px-5"
            >
              <td className="rounded-l-md py-4 ">{s.id}</td>
              <td className="py-4 ">{s.full_name}</td>
              <td>{s.birthdate}</td>
              <td>{s.grade}</td>
              <td>{s.school}</td>
              <td>{s.subjects.split(",").join(", ")}</td>
              <td className="rounded-r-md">
                <div className="flex">
                  <a className="mr-3 cursor-pointer text-xl text-slate-500 hover:text-blue-700">
                    <AiFillEdit />
                  </a>
                  <a className="cursor-pointer text-xl text-slate-500 hover:text-red-700">
                    <AiFillDelete />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
