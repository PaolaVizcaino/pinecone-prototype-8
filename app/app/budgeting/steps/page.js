import MightyPost from "../../../../components/MightyPost";
import { module2, stepsPart } from "../../../../lib/module2";

export const metadata = { title: "Steps to Developing a Budget | 2. Budgeting and Money Management" };

export default function StepsPage() {
  return <MightyPost mod={module2} part={stepsPart} icon="list" closeHref="/app/budgeting" />;
}
