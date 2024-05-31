import { Header } from "./sections/header";
import { Posts } from "./sections/posts";
import { Value } from "./sections/value";
import { Features } from "./sections/features";
import { About } from "./sections/about";
import { Services } from "./sections/services";
import { Team } from "./sections/Team";
import { Contact } from "./sections/contact";
import { Navigation } from "./sections/navigation";
import JsonData from "./data.json";

export default function Index() {
  return (
    <main>
      <Navigation />
      <Header data={JsonData.Header} />
      <Posts />
      <Value data={JsonData.Value} />
      <Features data={JsonData.Features} />
      <About data={JsonData.About} />
      <Services data={JsonData.Services} />
      <Team data={JsonData.Team} />
      <Contact data={JsonData.Contact} />
    </main>
  );
}
