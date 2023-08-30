function CourseCard({ course }) {
    return (
        <div className="course-item">
            <div className="course-item__img">
                <img src={course.imageUrl} alt="img-1" />
            </div>
            <div className="course-item__detail">
                <CourseItemBody
                    title={course.title}
                    description={course.description}
                    rate={course.rate}
                />
                <CourseItemFooter course={course} />
            </div>
        </div>
    );
}

export default CourseCard;

function CourseItemBody({ title, description, rate }) {
    return (
        <div className="course-item__body">
            <div>
                <p className="title">{title}</p>
                <p className="desc">{description}</p>
            </div>
            <span className="rate">⭐{rate}</span>
        </div>
    );
}
function CourseItemFooter({ course }) {
    const startDate = new Date(course.start).toLocaleDateString("fa-IR", {
        month: "short",
        year: "numeric",
        day: "numeric",
    });

    return (
        <div className="course-item__footer">
            <div className="tags">
                {course.tags.map((tags, i) => (
                    <span key={i} className="badge badge--secondary">
                        {tags}
                    </span>
                ))}
            </div>
            <div className="caption">
                <div className="date" dir="rtl">
                    {startDate}
                </div>
                <span
                    className={`badge ${
                        course.status === "Active"
                            ? "badge--primary"
                            : course.status === "Upcoming"
                            ? "badge--danger"
                            : "badge--secondary"
                    }`}
                >
                    {course.status}
                </span>
            </div>
        </div>
    );
}
