import studentData from "./data/students.json";

function Students() {
    return (
        <div>
            <h2>Students List</h2>
            <ul>
                {studentData?.students?.map((student) => (
                    <li key={student.id}>
                       {student["roll no"]} - {student.name} - Age: {student.age} - Course: {student.course} - {student.branch}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Students;