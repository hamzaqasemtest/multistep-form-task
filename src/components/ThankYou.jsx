import "./_thankyou.scss";
import { useEffect } from "react";
import { useLocalStorageData, useLocalStorageFormsData } from "../useLocalStorageData";

function ThankYou({ setFormStep, formData }) {
  const [forms, setForms] = useLocalStorageFormsData("forms", formData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormStep("info");
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="wrapper_thankyou">
      <img src="/images/icon-thank-you.svg" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@king.com.
      </p>
    </div>
  );
}

export default ThankYou;
