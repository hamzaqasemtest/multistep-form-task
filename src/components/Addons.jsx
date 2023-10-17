import { useLocalStorageData } from "../useLocalStorageData";
import { planAddons as addonsData } from "../data";
import "./_addons.scss";

function Addons() {
  const [thisFormData, setThisFormData] = useLocalStorageData("localFormData");

  const handleAddonsChange = (event) => {
    let { name } = event.target
    setThisFormData((prevData) => {
      return {
        ...prevData,
        addons: {...prevData.addons, [name]: !prevData.addons[name]}
      }
    });
  }

  return (
    <>
      <div className="title">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      { addonsData.map( addon => {
        return (
      <div 
            key={addon.id} 
            className={thisFormData.addons[addon.name] === true ? "addonCard--isActive" : "addonCard"}>
        <input 
          type="checkbox" 
          id={addon.id} 
          name={addon.name} 
          checked={thisFormData.addons[addon.name]}
          className="inputAddons"
          onChange={handleAddonsChange} />
        <label htmlFor={addon.id}>
          <div>
            <h2>{addon.title}</h2>
            <p>{addon.description}</p>
          </div>
          <p className="highlight_text">{thisFormData.plan.period ? `+${addon.yearly}/yr`: `+${addon.monthly}/mo`}</p>
        </label>
      </div>
        )
      })}
    </>
  );
}

export default Addons;
