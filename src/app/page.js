import React from 'react';
import './global.scss';

const Page = () => {
  return (
    <div>
      <div className="hero-sec">
        
        {/* course-details */}
        <div className="course-headings" style={{ backgroundImage: "url('./authorImg.png')" }}>
          <div className="course-det">
            <p className="auth-name"> NITYANAND CHARAN DAS </p>
            <h1 className="course-name"> Learn key life lessons from the Gita: Mind control and conflict resolution </h1>
          </div>
        </div>
        
        
        <div className="nav">
          <div className="navbar">
            <p id='active'> ABOUT </p>
            <p> INSTRUCTOR </p>
            <p> REVIEWS </p>
          </div>
        </div>

        <div className="aboutCourse">
          <h1> About the course </h1>
          <p> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
          <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          <p> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. </p>
        </div>
      
      </div>
    </div>
  );
};

export default Page;
