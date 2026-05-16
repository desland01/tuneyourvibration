import { redirect } from "next/navigation";
import { mulmiHousePath } from "@/lib/mulmi-house-data";

export default function Page() {
  redirect(mulmiHousePath);
}
