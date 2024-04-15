import styles from "./Table.module.css";
function Table({ UserData }) {
  return (
    <div>
      <>
        <div className={styles.container}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tableRow}>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {UserData.map((ele, index) => (
                <>
                  <tr key={index}>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                    <td>{ele.password}</td>
                    <td>{ele.gender}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}

export default Table;
