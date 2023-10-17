import { useLocalStorageData } from "../useLocalStorageData";
import "./_userinfo.scss";

function UserInfo() {

  const [thisFormData, setThisFormData] = useLocalStorageData( "localFormData");

  const handleChange = (event) => {
    let { name, value } = event.target;
    setThisFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="title">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form className="userForm">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={thisFormData.name}
            placeholder="e.g. Stephen King"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={thisFormData.email}
            placeholder="e.g. stephenking@king.com"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="labelError">
            <label htmlFor="phone">Phone Number</label>
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={thisFormData.phone}
            placeholder="1123"
            pattern="[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{3}"
            onChange={handleChange}
          />
        </div>
      </form> 
    </>
  );
}

export default UserInfo;
