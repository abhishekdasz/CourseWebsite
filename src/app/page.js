import React from "react";
import "./global.scss";
import { constants } from "./constants";

const Page = () => {
  const { course } = constants || {};
  const { testimonial } = constants;
  return (
    <div className="course">
      {/* page-1 hero-sec */}
      <div className="hero-sec">
        {/* course-details */}
        <div
          className="course-headings"
          style={{ backgroundImage: "url('./authorImg.png')" }}
        >
          <div className="course-det">
            <p className="auth-name"> NITYANAND CHARAN DAS </p>
            <h1 className="course-name"> Learn key life lessons from the Gita: Mind control and conflictresolution </h1>
          </div>
        </div>

        <div className="course-details">
          <div className="courseAndabout">
            <div className="nav">
              <div className="navbar">
                <p id="active"> ABOUT </p>
                <p> INSTRUCTOR </p>
                <p> REVIEWS </p>
              </div>
            </div>

            {/* aboutCourse */}
            <div className="aboutCourse">
              <h2> About the course </h2>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </div>


            {/* course expectations */}
            <div className="course-expectations">
              <h2> What to expect from the course </h2>
              <ul className="expectations">
                {course.what_to_expect.list_items.map((item, index) => (
                  <p key={index}> ✓ {item} </p>
                ))}
              </ul>
            </div>


            {/* key topics covered */}
            <div className="key-topics">
              <h2> Key Topics Covered </h2>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit similique illo aperiam commodi, aliquam tenetur totam neque non beatae ipsam? Repellendus voluptatibus consequuntur quibusdam voluptatum distinctio alias officiis rem consequatur? </p>
              <ul className="topics">
                {course.key_topics.heading.map((heading, index) => (
                <div key={index}>
                  <p> <b> ✓ {heading} </b> {course.key_topics.details[index]} </p>
                </div>
                ))}
              </ul>
            </div>
          </div>

          <div className="registrationCard">
            <div className="fees">
              <h4> Course fees </h4>
              <h1> ₹5,000 </h1>
            </div>
            <div className="features">
              <h4> What's Included: </h4>
              <p> 5 on-demand videos </p>
              <p> 2 livestream sessions </p>
              <p> Live Q&A sessions with Nityananda Charan Das </p>
              <p> An active whatsapp community </p>
            </div>

            <div className="btn"> Register today </div>
          </div>
        </div>
      </div>

      {/* page-2 about instructor */}
      <div className="about-instructor">
        <h2> About the Instructor </h2>
        <div className="instructor-details">
          <img src="/instructorProficpic.jpg" alt="instructor" />
          <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
        </div>
        <div className="instructor-socialMedia">
          <div className="socialMedia"> <img src="/facebook.png" alt="facebook" /> <p> Facebook </p> </div>
          <div className="socialMedia"> <img src="/twitterX.png" alt="twitterX" /> <p> Twitter </p> </div>
          <div className="socialMedia"> <img src="/youtube.png" alt="youtube" /> <p> Youtube </p> </div>
          <div className="socialMedia"> <img src="/instagram.png" alt="instagram" /> <p> Instagram </p> </div>
        </div>
      </div>


      {/* footer testinomials */}
      <div className="footer-testinomials">
        {testimonial && (
          <div>
            <h2>{testimonial.text}</h2>
            <h2>{testimonial.reviewer_name}</h2>
            <p>{testimonial.reviewer_designation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
