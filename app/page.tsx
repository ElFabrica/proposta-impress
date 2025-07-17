import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {

  redirect("https://nasaex.com")
  return (
  <div>
    Voltar para dashboard
  </div>
  );
}
