import PropTypes from "prop-types";
import '../index.css'

function Card({ children }) {
    return (
        <div className="card-wrapper">
         {children}
        </div>
    );
}


export default Card