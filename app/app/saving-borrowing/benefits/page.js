import MightyPost from "../../../../components/MightyPost";
import { module3, benefitsPart } from "../../../../lib/module3";

export const metadata = { title: "The Benefits of a High Credit Score | 3. Saving and Borrowing Decisions" };

export default function BenefitsPage() {
  return <MightyPost mod={module3} part={benefitsPart} icon="bars" closeHref="/app/saving-borrowing" />;
}
