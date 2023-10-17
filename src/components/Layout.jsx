import "./_layout.scss";
import LoginForm from "./LoginForm";
import FormsDataTable from "./FormsDataTable";



function Layout({ children, prevStep, nextStep, formStep, updateFormStep,isLoggedIn,setIsLoggedIn }) {
  return (
  <>
    <div className="wrapper">
      <div className="sidebar">
        <div className="formStep">
          <p className={ formStep === "info" ? "active" : ""}>1</p>
          <div>
            <p>Step 1</p>
            <p>Your Info</p>
          </div>
        </div>
        <div className="formStep">
          <p className={ formStep === "plan" ? "active" : ""}>2</p>
          <div>
            <p>Step 2</p>
            <p>Select Plan</p>
          </div>
        </div>
        <div className="formStep">
          <p className={ formStep === "addons" ? "active" : ""}>3</p>
          <div>
            <p>Step 3</p>
            <p>Add-ons</p>
          </div>
        </div>
        <div className="formStep">
          <p className={ formStep === "summary" ? "active" : formStep === "thankyou" ? "active": ""}>4</p>
          <div>
            <p>Step 4</p>
            <p>Summary</p>
          </div>
        </div>
      </div>
      <main>
      {children}
      <div className="buttonGroup">
        {prevStep && (
          <button className="altButton" onClick={() => updateFormStep(prevStep)}>Go back</button>
        )}
        {nextStep && (
          <button className="primaryButton" onClick={() => updateFormStep(nextStep)}>{formStep === "summary" ? "Confirm" : "Next Step"}</button>
        )}
      </div>
      </main>
    </div>
    <div>
      {!isLoggedIn ? (
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <FormsDataTable />
      )}
    </div>
  </>
  );
}

export default Layout;
