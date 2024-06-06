import BasicInfo from "@/app/components/BasicInfo";
import Pageheader from "@/app/components/PageHeader";
import PatientComplaint from "@/app/components/PatientComplaint";
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
