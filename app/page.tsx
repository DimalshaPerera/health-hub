// import Image from "next/image";
// import styles from "./page.module.css";
import BasicInfo from "./components/BasicInfo";
import Pageheader from "./components/PageHeader";
import PatientComplaint from "./components/PatientComplaint";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <Pageheader />
      <div className={styles.container}>
        <BasicInfo />

        <PatientComplaint />
      </div>
      <div className={styles.topicsContainer}>
        <span className={styles.topics}>Medical History</span>
        <span className={styles.topics}> Allergies</span>
        <span className={styles.topics}>Family History</span>
        <span className={styles.topics}> Investigations</span>
      </div>
    </>
  );
}
