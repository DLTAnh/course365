var gCoursesDB = {
    description: "This DB includes all courses in system",
    courses: [
        {
            id: 1,
            courseCode: "FE_WEB_ANGULAR_101",
            courseName: "How to easily create a website with Angular",
            price: 750,
            discountPrice: 600,
            duration: "3h 56m",
            level: "Beginner",
            coverImage: "images/courses/course-angular.jpg",
            teacherName: "Morris Mccoy",
            teacherPhoto: "images/teacher/morris_mccoy.jpg",
            isPopular: false,
            isTrending: true
        },
        {
            id: 2,
            courseCode: "BE_WEB_PYTHON_301",
            courseName: "The Python Course: build web application",
            price: 1050,
            discountPrice: 900,
            duration: "4h 30m",
            level: "Advanced",
            coverImage: "images/courses/course-python.jpg",
            teacherName: "Claire Robertson",
            teacherPhoto: "images/teacher/claire_robertson.jpg",
            isPopular: false,
            isTrending: true
        },
        {
            id: 5,
            courseCode: "FE_WEB_GRAPHQL_104",
            courseName: "GraphQL: introduction to graphQL for beginners",
            price: 850,
            discountPrice: 650,
            duration: "2h 15m",
            level: "Intermediate",
            coverImage: "images/courses/course-graphql.jpg",
            teacherName: "Ted Hawkins",
            teacherPhoto: "images/teacher/ted_hawkins.jpg",
            isPopular: true,
            isTrending: false
        },
        {
            id: 6,
            courseCode: "FE_WEB_JS_210",
            courseName: "Getting Started with JavaScript",
            price: 550,
            discountPrice: 300,
            duration: "3h 34m",
            level: "Beginner",
            coverImage: "images/courses/course-javascript.jpg",
            teacherName: "Ted Hawkins",
            teacherPhoto: "images/teacher/ted_hawkins.jpg",
            isPopular: true,
            isTrending: true
        },
        {
            id: 8,
            courseCode: "FE_WEB_CSS_111",
            courseName: "CSS: ultimate CSS course from beginner to advanced",
            price: 750,
            discountPrice: 600,
            duration: "3h 56m",
            level: "Beginner",
            coverImage: "images/courses/course-css.jpg",
            teacherName: "Juanita Bell",
            teacherPhoto: "images/teacher/juanita_bell.jpg",
            isPopular: true,
            isTrending: true
        },
        {
            id: 14,
            courseCode: "FE_WEB_WORDPRESS_111",
            courseName: "Complete Wordpress themes & plugins",
            price: 1050,
            discountPrice: 900,
            duration: "4h 30m",
            level: "Advanced",
            coverImage: "images/courses/course-wordpress.jpg",
            teacherName: "Clevaio Simon",
            teacherPhoto: "images/teacher/clevaio_simon.jpg",
            isPopular: true,
            isTrending: false
        }
    ],
    // method return all popular courses
    getPopularCourses: function() {
        var vPopularCourses = [];
        vPopularCourses = this.courses.filter(function(course) {
            return course.isPopular;
        });
        return vPopularCourses;
    },
    // method return all treding courses
    getTredingCourses: function() {
        var vTrendingCourses = [];
        vTrendingCourses = this.courses.filter(function(course) {
            return course.isTrending;
        });
        return vTrendingCourses;
    }
}

showPopularCourses();
// hàm get and show 4 popular courses
function showPopularCourses() {
    var vDivPopularCourse = $("#div-popular-courses");
    var vPopularCourses = gCoursesDB.getPopularCourses();
    if(vPopularCourses.length > 0) {
        // load ra và chỉ hiển thị max 04 courses
        for(var bI = 0; (bI < vPopularCourses.length && bI < 4); bI ++) {
            var bDivCourseTemplate = `
                <div class="col-lg-3">
                    <div class="card mb-4 card-hover">
                        <!-- Card header -->
                        <a href="#" class="card-img-top">
                            <img src="` + vPopularCourses[bI].coverImage +`" alt="" class="rounded-top card-img-top">
                        </a>
                        <!-- Card Body -->
                        <div class="card-body">
                            <h6 class="mb-2">
                                <a href="#">`+ vPopularCourses[bI].courseName +`</a>
                            </h6>
                            <!-- List Trình độ -->
                            <ul class="mb-3 list-inline">
                                <li class="list-inline-item"><i class="far fa-clock mr-2"></i>`+ vPopularCourses[bI].duration + `</li>
                                <li class="list-inline-item">`+ vPopularCourses[bI].level +`</li>
                            </ul>
                            <!-- Price -->
                            <div class="mt-3">
                                <span class="text-dark font-weight-bold">`+ vPopularCourses[bI].price +`</span>
                                <del class="text-muted">`+ vPopularCourses[bI].discountPrice +`</del>
                            </div>
                        </div>
                        <!-- Card Footer -->
                        <div class="card-footer">
                            <div class="float-left mr-3">
                                <img src="`+ vPopularCourses[bI].teacherPhoto +`" class="rounded-circle img-teacher-avatar" alt="">
                            </div>
                            <div class="float-left">
                                <small>`+ vPopularCourses[bI].teacherName +`</small>
                            </div>
                            <div class="float-right">
                                <i class="far fa-bookmark text-secondary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            vDivPopularCourse.append(bDivCourseTemplate);
        }
    }
}

showTrendingCourses();
// hàm get and show 4 trending courses
function showTrendingCourses() {
    var vDivTrendingCourse = $("#div-trending-courses");
    var vTrendingCourses = gCoursesDB.getTredingCourses();
    if(vTrendingCourses.length > 0) {
        // load ra và chỉ hiển thị max 04 courses
        for(var bI = 0; (bI < vTrendingCourses.length && bI < 4); bI ++) {
            var bDivCourseTemplate = `
                <div class="col-lg-3">
                    <div class="card mb-4 card-hover">
                        <!-- Card header -->
                        <a href="#" class="card-img-top">
                            <img src="` + vTrendingCourses[bI].coverImage +`" alt="" class="rounded-top card-img-top">
                        </a>
                        <!-- Card Body -->
                        <div class="card-body">
                            <h6 class="mb-2">
                                <a href="#">`+ vTrendingCourses[bI].courseName +`</a>
                            </h6>
                            <!-- List Trình độ -->
                            <ul class="mb-3 list-inline">
                                <li class="list-inline-item"><i class="far fa-clock mr-2"></i>`+ vTrendingCourses[bI].duration +`</li>
                                <li class="list-inline-item">`+ vTrendingCourses[bI].level +`</li>
                            </ul>
                            <!-- Price -->
                            <div class="mt-3">
                                <span class="text-dark font-weight-bold">`+ vTrendingCourses[bI].price +`</span>
                                <del class="text-muted">`+ vTrendingCourses[bI].discountPrice +`</del>
                            </div>
                        </div>
                        <!-- Card Footer -->
                        <div class="card-footer">
                            <div class="float-left mr-3">
                                <img src="`+ vTrendingCourses[bI].teacherPhoto +`" class="rounded-circle img-teacher-avatar" alt="">
                            </div>
                            <div class="float-left">
                                <small>`+ vTrendingCourses[bI].teacherName +`</small>
                            </div>
                            <div class="float-right">
                                <i class="far fa-bookmark text-secondary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            vDivTrendingCourse.append(bDivCourseTemplate);
        }
    }
}