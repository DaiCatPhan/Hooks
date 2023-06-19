import {  useEffect, useState } from "react";

const lessons = [
    {
        id: 1,
        name: 'ReactJS la gi ? Tai sao phai hoc ReactJs'
    },
    {
        id: 2,
        name: 'SPA / MPA la gi'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]


function Content() {
    const [lessonId , setLessonId] = useState(1)

    useEffect(() => {

        const handleComment = (e) => {
            console.log(e.detail);
        }

        window.addEventListener(`lesson-${lessonId}` , handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}` , handleComment)
        }
    },[lessonId])
    
    const handleClick = (id) => {
        setLessonId(id)
    }

    return ( 


        <>
            <ul>
                {
                    lessons.map(lesson => (
                        <li
                            key={lesson.id}
                            style={
                                lessonId === lesson.id ? {
                                    color: 'red'
                                } : {}
                            }
                            onClick={() => handleClick(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    ))
                }
            </ul>
        </>
     );
}

export default Content;