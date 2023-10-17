import {  useState } from "react";
import { useLocalStorageData } from "./useLocalStorageData";
import "./_app.scss"



import Layout from "./components/Layout";
import UserInfo from "./components/UserInfo";
import SubscriptionPlans from "./components/SubscriptionPlans";
import Addons from "./components/Addons";
import FormSummary from "./components/FormSummary";
import ThankYou from "./components/ThankYou";

function App() {

  const [formStep, setFormStep] = useState("info");
  const [multiStepFormData, setMultiStepFormData] = useLocalStorageData("localFormData");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  switch (formStep) {
    case "info":
      return (
        <Layout 
          nextStep="plan" 
          formStep={formStep} 
          updateFormStep={setFormStep}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        >
          <UserInfo
            updateFormStep={setFormStep}
            multiStepFormData={multiStepFormData}
          />
        </Layout>
      );
    case "plan":
      return (
        <Layout
          prevStep="info"
          nextStep="addons"
          formStep={formStep}
          updateFormStep={setFormStep}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        >
          <SubscriptionPlans />
        </Layout>
      );
    case "addons":
      return (
        <Layout
          prevStep="plan"
          nextStep="summary"
          formStep={formStep}
          updateFormStep={setFormStep}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        >
          <Addons />
        </Layout>
      );
    case "summary":
      return (
        <Layout
          prevStep="addons"
          nextStep="thankyou"
          formStep={formStep}
          updateFormStep={setFormStep}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        >
          <FormSummary changePlan={setFormStep} />
        </Layout>
      );
    case "thankyou":
      return (
        <Layout
          formStep={formStep}
            isLoggedIn={isLoggedIn}
  setIsLoggedIn={setIsLoggedIn}
        >
        <ThankYou setFormStep={setFormStep} formData={multiStepFormData} />
        </Layout>
      );
    default:
      <>You should never see this </>;
      break;
  }
}

export default App;