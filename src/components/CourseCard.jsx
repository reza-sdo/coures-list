function CourseCard({course}) {
    
    return (
        <div className="course-item">
            <div className="course-item__img">
                <img src={course.imageUrl} alt="img-1" />
            </div>
            <div className="course-item__detail">
                <CourseItemBody title={course.title} description={course.description} rate={course.rate}/>
                <CourseItemFooter course={course}/>
                
            </div>
        </div>
    );
}

export default CourseCard;


function CourseItemBody ({title, description, rate}){
    return (
        <div className="course-item__body">
                    <div>
                        <p className="title">{title}</p>
                        <p className="desc">{description}</p>
                    </div>
                    <span className="rate">{rate}</span>
                </div>
    )
    
}
function CourseItemFooter ({course}){
    return (
        <div className="course-item__footer">
                    <div className="tags">
                        {course.tags.map((tags , i) => (
                            <span key={i} className="badge badge--secondary">
                                {tags}
                            </span>
                        ))}
                    </div>
                    <div className="caption">
                        <div className="date" dir="rtl">
                            {new Date(course.start).toLocaleDateString(
                                "fa-IR",
                                {
                                    month: "short",
                                    year: "numeric",
                                    day: "numeric",
                                }
                            )}
                        </div>
                        <span className="badge badge--primary">
                            {course.status}
                        </span>
                    </div>
                </div>
    )
}