import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { PageTransition } from '../components/layout/PageTransition';
import { profile } from '../content/site';
import { Hero } from '../sections/Hero';
import { SelectedWork } from '../sections/SelectedWork';
import { About } from '../sections/About';
import { Experience } from '../sections/Experience';
import { Skills } from '../sections/Skills';
import { Contact } from '../sections/Contact';

export function HomePage() {
  useDocumentMeta(
    `${profile.name} — ${profile.title}`,
    `${profile.name} is a ${profile.title} from ${profile.location} with a Computer Science background. Selected work, case studies and experience.`,
  );
  return (
    <PageTransition>
      <Hero />
      <SelectedWork />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </PageTransition>
  );
}
