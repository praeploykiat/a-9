import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.auth); // Check if user is logged in

  return (
    <>
      <section className="heading">
        <h1>
          {user
            ? "What do you need help with?"
            : "Vac Q: A Vaccine Booking System"}
        </h1>
        <p>Please choose from an option below</p>
      </section>

      {user ? (
        <>
          <Link to="/new-ticket" className="btn btn-reverse btn-block">
            <FaQuestionCircle /> Create New Ticket
          </Link>

          <Link to="/tickets" className="btn btn-block">
            <FaTicketAlt /> View My Ticket
          </Link>
        </>
      ) : (
        <>
          <Link to="/new-ticket" className="btn btn-reverse btn-block">
            <FaQuestionCircle /> Create New Vaccine Appointment
          </Link>

          <Link to="/tickets" className="btn btn-block">
            <FaTicketAlt /> View My Appointments
          </Link>
        </>
      )}
    </>
  );
}

export default Home;
