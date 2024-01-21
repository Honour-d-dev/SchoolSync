import { Sessions } from "@/lib/types";
import { Download } from "lucide-react";

export default function Transcript({
  name,
  id,
  sessions,
}: {
  name: string;
  id: string;
  sessions: Sessions;
}) {
  const calcGPA = (session: Sessions[number]) => {
    const first = session.firstSemester.reduce(
      (acc, course) => {
        const grade =
          course.score >= 75
            ? 5
            : course.score >= 60
            ? 4
            : course.score >= 50
            ? 3
            : course.score >= 45
            ? 2
            : 1;
        acc.gradeXunit += course.unit * grade;
        acc.totalUnit += course.unit;
        return acc;
      },
      { gradeXunit: 0, totalUnit: 0 }
    );

    const second = session.secondSemester.reduce(
      (acc, course) => {
        const grade =
          course.score >= 75
            ? 5
            : course.score >= 60
            ? 4
            : course.score >= 50
            ? 3
            : course.score >= 45
            ? 2
            : 1;
        acc.gradeXunit += course.unit * grade;
        acc.totalUnit += course.unit;
        return acc;
      },
      { gradeXunit: 0, totalUnit: 0 }
    );

    const firstGPA = first.totalUnit ? first.gradeXunit / first.totalUnit : 0;
    const secondGPA = second.totalUnit
      ? second.gradeXunit / second.totalUnit
      : 0;
    const averageGPA = (firstGPA + secondGPA) / 2;

    return { firstGPA, secondGPA, averageGPA };
  };
  return (
    <div className="flex justify-start items-center pt-16 flex-col relative p-16 h-[90%]">
      <div className="overflow-y-auto max-h-[90%]">
        <table>
          <tbody>
            <tr>
              <th className="border border-black p-2 pl-3">Student Name</th>
              <td className="border border-black p-2 pl-3">{name}</td>
              <td className="border border-black p-2 pl-3"></td>
              <td className="border border-black p-2 pl-3"></td>
              <td className="border border-black p-2 pl-3"></td>
            </tr>
            <tr>
              <th className="border border-black p-2 pl-3">Student ID</th>
              <td className="border border-black p-2 pl-3">{id}</td>
              <td className="border border-black p-2 pl-3"></td>
              <td className="border border-black p-2 pl-3"></td>
              <td className="border border-black p-2 pl-3"></td>
            </tr>
            <tr>
              <td className="border border-black p-4"></td>
              <td className="border border-black p-4"></td>
              <td className="border border-black p-4"></td>
              <td className="border border-black p-4"></td>
              <td className="border border-black p-4"></td>
            </tr>
            <tr>
              <th className="border border-black p-2">Course Code</th>
              <th className="border border-black p-2">Course Title</th>
              <th className="border border-black p-2">Score</th>
              <th className="border border-black p-2">Credit Hours</th>
              <th className="border border-black p-2">Grade</th>
            </tr>
            {sessions.map((session, index) => {
              const gpa = calcGPA(session);
              return [
                session.firstSemester.map((course) => {
                  return (
                    <tr key={course.courseCode}>
                      <td className="border border-black p-2 pl-3">
                        {course.courseCode}
                      </td>
                      <td className="border border-black p-2 pl-3">
                        {course.courseTitle}
                      </td>
                      <td className="border border-black p-2 pl-3">
                        {course.score}
                      </td>
                      <td className="border border-black p-2 pl-3">
                        {course.unit}
                      </td>
                      <td className="border border-black p-2 pl-3">
                        {course.score >= 75
                          ? "A"
                          : course.score >= 60
                          ? "B"
                          : course.score >= 50
                          ? "C"
                          : course.score >= 45
                          ? "D"
                          : "E"}
                      </td>
                    </tr>
                  );
                }),
                <tr key={`${index}0`}>
                  <td className="border border-black p-2 pl-3"></td>
                  <td className="border border-black p-2 pl-3"></td>
                  <td className="border border-black p-2 pl-3"></td>
                  <th className="border border-black p-2 pl-3">GPA</th>
                  <td className="border border-black p-2 pl-3">
                    {gpa.firstGPA.toFixed(2)}
                  </td>
                </tr>,
                session.secondSemester.map((course) => {
                  return (
                    <tr key={course.courseCode}>
                      <td className="border border-black p-2 pl-3">
                        {course.courseCode}
                      </td>
                      <td className="border border-black p-2 pl-3">
                        {course.courseTitle}
                      </td>
                      <td className="border border-black p-2 pl-3">
                        {course.score}
                      </td>
                      <td className="border border-black p-2 pl-3">
                        {course.unit}
                      </td>
                      <td className="border border-black p-2 pl-3">
                        {course.score >= 75
                          ? "A"
                          : course.score >= 60
                          ? "B"
                          : course.score >= 50
                          ? "C"
                          : course.score >= 45
                          ? "D"
                          : "E"}
                      </td>
                    </tr>
                  );
                }),
                <tr key={`${index}1`}>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <th className="border border-black p-2">GPA</th>
                  <td className="border border-black p-2">
                    {gpa.secondGPA.toFixed(2)}
                  </td>
                </tr>,
                <tr key={`${index}2`}>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <td className="border border-black p-2"></td>
                  <th className="border border-black p-2">CGPA</th>
                  <td className="border border-black p-2">
                    {gpa.averageGPA.toFixed(2)}
                  </td>
                </tr>,
              ];
            })}
          </tbody>
        </table>
      </div>
      <button
        disabled
        className=" py-2 px-6 bg-blue-300 rounded-md font-Inconsolata font-semibold absolute bottom-0 right-0 flex flex-row gap-4"
      >
        <Download />
        Download Copy
      </button>
    </div>
  );
}
