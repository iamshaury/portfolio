import { Github, Linkedin, Mail } from "lucide-react";

const TechBadge = ({ icon, name }: { icon: string, name: string }) => (
  <div className="flex items-center gap-2.5 border border-foreground/10 bg-foreground/5 px-4 py-2 rounded-xl hover:bg-foreground/10 transition-colors cursor-default">
    <img src={`https://skillicons.dev/icons?i=${icon}&theme=dark`} className="h-6 w-6" alt={name} />
    <span className="text-base font-medium text-foreground/80">{name}</span>
  </div>
);

export default function Home() {
  return (
    <div className="slide-enter-content max-w-[65ch] mx-auto pt-12">
      <h1 className="font-cursive mt-4 mb-4 text-6xl font-normal text-foreground leading-tight">Shaury Chaudhary</h1>
      <p className="prose-p text-xl font-medium text-foreground mb-6">
        Hey there! I'm Shaury, an AI & Web Developer (and current B.Tech student) who is absolutely obsessed with building cool things that actually make sense to use.
      </p>
      <p className="prose-p">
        For me, coding isn't just about crunching complex backend logic or training AI models in the dark—it's about wiring those heavy-hitting tools to clean, beautiful designs that put a smile on people's faces!   You can find my <a href="https://github.com/iamshaury" target="_blank" rel="noopener noreferrer" className="prose-link font-medium"> projects on GitHub</a>.
      </p>
      <p className="prose-p mt-6">
        Whether I'm mapping out a scalable database, bringing a full-stack app to life, or teaching a machine learning model some new tricks, I'm always chasing that 'aha!' moment where tech solves a real-world problem effortlessly.
      </p>
      <p className="prose-p mt-6">
        When I finally peel my eyes away from my code editor, you'll usually find me chasing fitness or trying out wild new strategies on the chessboard!
      </p>
      <div className="mt-12 mb-14">
        <h2 className="text-lg font-semibold mb-6 text-foreground">Technologies I work with</h2>
        <div className="flex flex-wrap gap-4">
          <TechBadge icon="react" name="React" />
          <TechBadge icon="react" name="React Native" />
          <TechBadge icon="nextjs" name="Next.js" />
          <TechBadge icon="tailwindcss" name="Tailwind CSS" />
          <TechBadge icon="ts" name="TypeScript" />
          <TechBadge icon="nodejs" name="Node.js" />
          <TechBadge icon="python" name="Python" />
          <TechBadge icon="pytorch" name="PyTorch" />
          <TechBadge icon="tensorflow" name="TensorFlow" />
          <TechBadge icon="postgres" name="PostgreSQL" />
          <TechBadge icon="mongodb" name="MongoDB" />
          <TechBadge icon="prisma" name="Prisma" />
        </div>
      </div>

      <div className="mt-14 mb-14">
        <h2 className="text-lg font-semibold mb-6 text-foreground">Find me on</h2>
        <div className="flex flex-col gap-4">
          <a href="https://github.com/iamshaury" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-fit group">
            <Github className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="prose-link">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/shaury-chaudhary-7139a530a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-fit group">
            <Linkedin className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="prose-link">LinkedIn</span>
          </a>
        </div>

        <div className="mt-8 text-foreground/80">
          Or mail me at <a href="mailto:officialshaury@gmail.com" className="prose-link font-medium">officialshaury@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
