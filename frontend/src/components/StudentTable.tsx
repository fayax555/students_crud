import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const studentData = [
  {
    id: 1,
    fullName: "John Lennon",
    birthdate: "02-10-1998",
    grade: 10,
    school: "Thaajudheen School",
    subjects: ["Maths", "English"],
  },
  {
    id: 2,
    fullName: "Paul McCartney",
    birthdate: "15-04-2001",
    grade: 8,
    school: "Ghiyasuddin School",
    subjects: ["Dhivehi", "Islam"],
  },
  {
    id: 3,
    fullName: "George Harrison",
    birthdate: "25-12-2000",
    grade: 9,
    school: "Majeediyya School",
    subjects: ["Chemistry", "Biology"],
  },
] as const;

export function StudentTable() {
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
              <td className="py-4 ">{s.fullName}</td>
              <td>{s.birthdate}</td>
              <td>{s.grade}</td>
              <td>{s.school}</td>
              <td>{s.subjects.flat().join(", ")}</td>
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
