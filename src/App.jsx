import "./App.css";

function App() {
    return (
        <div>
            <h1>My Courses (3)</h1>
            <CourseList/>
        </div>
    );
}

export default App;



function CourseList(){
    return (
        <div className="course-list">
                <div className="course-item">
                    <div className="course-item__img">
                        <img src="/images/img1.jpg" alt="img-1" />
                    </div>
                    <div className="course-item__detail">
                        <div className="course-item__body">
                            <div>
                                <p className="title">React course</p>
                                <p className="desc">something</p>
                            </div>
                            <span className="rate">4</span>
                        </div>
                        <div className="course-item__footer">
                            <div className="tags">
                                <span className="badge badge--secondary">react</span>
                                <span className="badge badge--secondary">FrontEnd</span>
                            </div>
                            <div className="caption">
                                <div className="date" dir="rtl">{
                                    new Date().toLocaleDateString("fa-IR" , {
                                        month:"short",
                                        year:"numeric",
                                        day:"numeric",
                                    })
                                }</div>
                                <span className="badge badge--primary">competed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}