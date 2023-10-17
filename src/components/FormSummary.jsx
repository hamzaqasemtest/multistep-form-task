import { useLocalStorageData } from "../useLocalStorageData";
import {plans , planAddons} from "../data";
import "./_summary.scss";


function FormSummary({ changePlan }) {

  const [thisFormData, setThisFormData] = useLocalStorageData("localFormData");

  const findPlan = (name) => {
    return plans.filter(plan => plan.name === name)
  } 

  const findAddons = (addons) => {
    return planAddons.filter((addon) => {
      if (addons.includes(addon.name)) {
        return addon
      }
    })
  }

  const calculatePlanPrice = () => {
    let selectedPlan = findPlan(thisFormData.plan.type);
    if(thisFormData.plan.period) {
      return `$${selectedPlan[0].yearly}/yr`
    }
    return `$${selectedPlan[0].monthly}/mo`
  }

  const selectedAddons = Object.entries(thisFormData.addons).filter(([,value]) => value == true)
  const filterValues = selectedAddons.map(addon => addon[0])
  const showAddons = findAddons(filterValues)

  const calculateGrandTotal = () => {
    const selectedPlan = findPlan(thisFormData.plan.type)
    const planCost = thisFormData.plan.period ? selectedPlan[0].yearly : selectedPlan[0].monthly 
    const addonCosts = showAddons.reduce((total, addon) => {
      const planPeriod = thisFormData.plan.period ? "yearly" : "monthly"
      return total + addon[planPeriod]
    }, 0)

    return addonCosts + planCost;
  }

  return (
    <>
      <div className="title">
        <h1>Finishing Up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="section_outer_wrapper">
        <div className="wrapper_sub">
          <div className="sub_inner_wrapper">
            <h2>{thisFormData.plan.type}({thisFormData.plan.period ? 'Annual' : 'Monthly'})</h2>
            <button onClick={() => changePlan("plan")}>Change</button>
          </div>
          <p>{calculatePlanPrice()}</p>
        </div>
        {showAddons.length > 0 && <hr />}
        {showAddons && showAddons.map(addon => {
          return (
            <div key={addon.id} className="wrapper_section_addon">
            <p>{addon.title}</p>
            <p>{thisFormData.plan.period ? `+${addon.yearly}/yr`: `+${addon.monthly}/mo`}</p>
            </div>)
        })}
      </div>
      <div className="wrapper_grandtotal">
        <p>Total (per {thisFormData.plan.period ? "year" : "month"})</p>
        <p>+${calculateGrandTotal()}{thisFormData.plan.period ? "/yr" : "/mo"}</p>
      </div>
    </>
  );
}

export default FormSummary;
