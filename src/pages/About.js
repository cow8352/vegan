import { Link } from 'react-router-dom';

function About(props) {
  // console.log(props)
  // const { auth } = props

  return (
    <>
      <h1>About</h1>
      <p>This is about</p>
      <Link to="/login">To Login Page(test ScrollToTop)</Link>
    </>
  );
}

export default About;
