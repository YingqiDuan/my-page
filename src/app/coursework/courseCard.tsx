import React from "react";
import { Course } from "./course";

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div className="border p-4 rounded-lg shadow bg-white">
            {/* 课程名称 */}
            <h2 className="text-xl font-bold mb-2">{course.name}</h2>

            {/* 课程描述 */}
            <p className="text-gray-700 mb-2">{course.description}</p>

            {/* 教授信息 */}
            <p className="text-gray-600 mb-2">
                <span className="font-semibold">Professor: </span>
                {course.professor}
            </p>

            {/* Final Project 链接 */}
            {course.finalProjectUrl && (
                <a
                    href={course.finalProjectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    Final Project Link
                </a>
            )}
        </div>
    );
};

export default CourseCard;
