import { useLocalStorageData } from "../useLocalStorageData";
import {plans as plansData } from "../data";
import "./_subscriptionplans.scss";

function SubscriptionPlans() {
  const [thisFormData, setThisFormData] = useLocalStorageData("localFormData");

  const handleTypeChange = (value) => {
    setThisFormData((prevData) => {
      return {
        ...prevData,
         plan: {...prevData.plan, type: value}
      };
    });
  }

  const handlePeriodChange = () => {
    setThisFormData((prevData) => {
      return {
        ...prevData, 
        plan: {...prevData.plan, period: !prevData.plan.period }
      }
    });
  }

  return (
    <>
      <div className="title">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or annual billing</p>
      </div>
      <form className="subscriptionForm">
        <div className="planOptions"  >
          { plansData.map(plan => {
            return (
              <div 
                className={thisFormData.plan.type === plan.name ? "planCard--isActive" : "planCard"}
                  onClick={() => handleTypeChange(plan.name)}
                  key={plan.id}>
                <img className="iconImage" src={plan.imgSrc}/>
                <input type="radio"
                    value={plan.name}
                    onChange={() => handleTypeChange(value)}
                    checked={thisFormData.plan.type === plan.name}/>
                <div className="planCardText">
                  <label htmlFor={plan.name}>{plan.name}</label>
                  <p>{thisFormData.plan.period ? `$${plan.yearly}/yr` : `$${plan.monthly}/mo`}</p>
                  {thisFormData.plan.period && <p className="promoText">2 months free</p>}
                </div>
              </div>)
            })
          }
        </div>
        <div className="periodOptions">
          <label htmlFor="period" className={thisFormData.plan.period ? "" : "activePeriod"} >Monthly</label>
          <input
            type="checkbox"
            checked={thisFormData.plan.period}
            onChange={handlePeriodChange}
          />
          <label className="periodToggle"htmlFor="period"><span className="toggle"></span></label>
          <label htmlFor="period" className={thisFormData.plan.period ? "activePeriod" : ""}>Annual</label>
        </div>
      </form>
    </>
  );
}

export default SubscriptionPlans;
