import { ArrowLeft, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useState } from "react";
import { Sessions } from "@/lib/types";

export default function Grades({ sessions }: { sessions: Sessions }) {
  type Semester = Sessions[number]["firstSemester"];
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const [semester, setSemester] = useState<Semester>();
  const [title, setTitle] = useState<string>();

  const selectSemester = (title?: string, semester?: Semester) => {
    setTitle(title);
    setSemester(semester);
  };
  return (
    <div className=" flex flex-col pt-16 gap-4">
      {semester === undefined ? (
        sessions?.map((level, index) => {
          return (
            <Collapsible
              className="flex flex-col w-[400px] font-Inconsolata"
              onOpenChange={setIsCollapsibleOpen}
              open={isCollapsibleOpen}
              key={index}
            >
              <CollapsibleTrigger className="flex flex-row p-4 justify-between w-full border border-blue-600 rounded-md font-semibold">
                {`${(index + 1) * 100} level`}
                <ChevronDown
                  className={`ml-2 w-4 ${
                    isCollapsibleOpen ? "rotate-180" : ""
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="flex flex-col gap-1 p-2">
                <button
                  className="shadow p-2 font-semibold"
                  onClick={() =>
                    selectSemester(
                      `${(index + 1) * 100} level - First Semester`,
                      level.firstSemester
                    )
                  }
                >
                  First Semester
                </button>
                <button
                  className="shadow p-2 font-semibold"
                  onClick={() =>
                    selectSemester(
                      `${(index + 1) * 100} level - Second Semester`,
                      level.secondSemester
                    )
                  }
                >
                  Second Semester
                </button>
              </CollapsibleContent>
            </Collapsible>
          );
        })
      ) : (
        <div className=" flex flex-col gap-10 -mt-12">
          <button
            className="flex flex-row gap-4"
            onClick={() => selectSemester()}
          >
            <ArrowLeft />{" "}
            <span className="text-2xl font-bold font-Inconsolata">
              {" "}
              {title}
            </span>
          </button>
          <table className="border-collapse w-fit">
            <thead>
              <tr>
                <th className="border border-black p-3"> </th>
                <th className="border border-black p-2">Course Name</th>
                <th className="border border-black p-2">Course Code</th>
                <th className="border border-black p-2">Score</th>
                <th className="border border-black p-2">Credit Hours</th>
                <th className="border border-black p-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {semester.map((course) => {
                return (
                  <tr key={course.courseCode}>
                    <td className="border border-black p-3"> </td>
                    <td className="border border-black p-2">
                      {course.courseTitle}
                    </td>
                    <td className="border border-black p-2">
                      {course.courseCode}
                    </td>
                    <td className="border border-black p-2">{course.score}</td>
                    <td className="border border-black p-2">{course.unit}</td>
                    <td className="border border-black p-2">
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
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
