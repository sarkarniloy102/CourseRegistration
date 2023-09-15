import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";


const Courses = () => {
    const [courses, setcoureses] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setcoureses(data))
    }, []);
    return (
        <div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>

        </div>


    );
};

export default Courses;