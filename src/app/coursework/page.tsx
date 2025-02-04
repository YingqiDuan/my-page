"use client"
import React from "react";
import { courses } from "./course";
import CourseCard from "./courseCard";
import ReturnButton from '../components/ReturnButton';
import Link from 'next/link';


const CourseList: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">
                    Course List
                </h1>
                <Link
                    href='https://drive.google.com/file/d/1bD1-H744ImHDm7zj73fwl3BUGYsXBrYy/view?usp=drive_link'
                    className="text-xl text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Academic Transcript
                </Link>
                <ReturnButton className="md-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseList;
