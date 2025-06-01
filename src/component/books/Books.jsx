import "react";
import "./Books.css";
import mobile from '../../assets/image/mobile.png';
import women from '../../assets/image/women.png'
const Books = () => {
  return (
    <div>
      <section className="Books">
        <div className="container">
          <div className="row rowBook">
            <div className="col-sm-12 col-md-6 col-lg-6 booksOne">
              <h2>Book Appointment</h2>
              <form action="">
                <select name="" id="" className="form-control">
                  <option>select Department</option>
                  <option>one</option>
                  <option>tow</option>
                  <option>three</option>
                </select>
                <select name="" id="" className="form-control">
                  <option>select Doctor</option>
                  <option>one</option>
                  <option>tow</option>
                  <option>three</option>
                </select>
                <div className="form-control">
                  <input type="text" placeholder="your name" required />
                </div>
                <div className="form-control">
                  <input type="text" placeholder="phone number" required />
                </div>
                <div className="form-control">
                  <input type="date" placeholder="phone number" required />
                </div>

                <button className="btn btn-primary">submit</button>
              </form>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 bok">
              <div className="imgesBooks">
              <img className="imgOne" src={mobile} alt="" />
              </div>
              <div>
              <img className='imgTow' src={women} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
