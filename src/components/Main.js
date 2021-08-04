nimport PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Lectures and Sections </h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Fall 2020 was certainly not the sophomore fall I had initially expected. I never would have imagined that I would be rolling out of bed 5 minutes before classes started each day, moving the two feet from my bed to my desk, or that I would be using Facetime and Zoom like my life depended on them. Yet, although it may not have been an ideal semester of college, I truly learned so much, both in classes, and just from being at home and having more time to myself. For classes, I put in more work than ever before. I found that I was really throwing myself into my courses, determined to get as much from them as I could, especially because I was taking classes that I really enjoyed.
          </p>
          <p>
            Recorded lectures were, for the most part, super interesting to me. I loved when they included videos from other sources that showed real applications of the science, like when we saw how people could control bionic arms simply by thinking. These videos were often simply YouTube videos or from news sources, but either way, seeing how what we were learning could apply to real life situations was inspiring. I also loved our Friday guest lectures. Almost every Friday, we would have a guest speaker come to our Zoom session. By Friday we would have watched a video of them introducing themselves and teaching a lecture about their focus that was related to the material we had learned that week, but extended a bit beyond the class’s reach. We would submit a question in advance, and then on Friday the speaker would come and we had the chance to ask as many questions as we could in 75 minutes.
          </p>
          <p>
            We also were sent a package at the beginning of the year with a variety of small things to facilitate learning, like a reflex hammer to see the knee jerk reflex in person, a miracle berry that made sour things taste sweet by changing taste bud receptivity, and a tool to alter vision when you looked through it. Another course sent us a kit with a quire making activity, as well as an activity involving placing different kinds of paper under light to see what would happen over time. Having these physical objects to demonstrate topics in the class made it so much more fun.
          </p>
          <p>
            I think one source of improvement for most of my classes could be in scheduling live classes more clearly. Sometimes sections felt a little disorganized or not very effective. For example, there was often an activity, but it would be in breakout rooms and we wouldn’t go over it. Plus, the section was only an hour, so there usually wasn’t enough time to get much done. the TF (who was wonderful) would have to rush through the section activity, or sometimes we just wouldn’t finish it because we needed time to review the materials, go into breakout rooms, etc. Obviously, professors and TFs did the best they could, but I hope that this semester helped them redesign lesson plans to be completed within the time we have, even if it means cutting down the lesson.
          </p>
          <p>
            Overall, the common theme here is that hands-on experience, after having lectures to introduce the topics, as well as interactions with people actually working in the fields of focus, made my classes more interesting and effective.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Capstones & Creative Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I did a final capstone project where we created videos and presentations to suggest changes to faculty that would improve social belonging at Harvard. I enjoyed actually communicating what we had learned and how it could be applied to Harvard, and it increased my confidence in my communication skills.

          </p>
          <p>
            I also had a final research project for one of my courses. We had to conduct an actual experiment, and so I got to learn how to use Qualtrics, as well as a bit on how to use the programming language R.

          </p>
          <p>
For one class, we also wrote blog posts using the material, and I LOVED this. It made me realize my love for writing, and I’ll be exploring opportunities in the Crimson this coming semester. Each of us had to do a blog post, and we would meet with our professor in small groups before it was due. She took this time to ask us how we were doing, how the class could be improved, and answer any questions. Everyone said they appreciated those small 15-20 min meetings so much, even though they were outside of class time. Having time to check in with students was vital.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Workload and Return to Campus</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            It did feel that the workload of my classes had expanded to fill much of my time. Perhaps it was because I was putting in more effort and didn’t know when to stop working because school and personal life became so intertwined, simply because it was all happening in the same environment. Imposter syndrome also seemed to heighten this semester, both in myself and in friends I talked to, because no one knew how much others were doing. We felt like we were all behind, but we didn’t know what to do to not feel that way.
          </p>
          <p>
            Online school did become a bit more overwhelming at times than I had hoped. But all my professors and TFs were extremely accommodating and were constantly asking for ways they could improve our experience. This also allowed me to work on my time management, and I was able to create habits such as going for walks, working out, and facetiming friends, all of which helped me feel more in control of my life. Plus, being at home gave me time to spend with my family, and I was able to babysit my niece a few times a week, which I wouldn’t have been able to do had I been on campus. I think this semester made me more aware of all I have to be grateful for. When I find myself stressed out or down-in-the-dumps because I’m not on campus, I’ve noticed that I’ll quickly resort to reminding myself of the silver linings, and there are always quite a few.

          </p>
          {close}
        </article>


     </div>
   )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
