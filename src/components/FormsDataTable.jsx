import { useLocalStorageData } from "../useLocalStorageData";

function FormsDataTable() {
  const [forms] = useLocalStorageData("forms");

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Plan</th>
          <th>Addons</th>
        </tr>
      </thead>
      <tbody>
        {forms.map((form, index) => (
          <tr key={index}>
            <td>{form.name}</td>
            <td>{form.email}</td>
            <td>{form.phone}</td>
            <td>{form.plan.type}</td>
            <td>{Object.keys(form.addons).join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
 
export default FormsDataTable;
