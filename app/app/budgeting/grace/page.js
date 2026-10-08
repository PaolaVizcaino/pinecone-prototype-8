import MightyPost from "../../../../components/MightyPost";
import { module2, gracePart } from "../../../../lib/module2";

export const metadata = { title: "Grace Builds a Budget | 2. Budgeting and Money Management" };

export default function GracePage() {
  return <MightyPost mod={module2} part={gracePart} icon="list" closeHref="/app/budgeting" />;
}
