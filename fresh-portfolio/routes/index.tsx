import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Kyle Jurassic</h1>
        <p class="my-4">
          Actor | Musician | Educator
        </p>
      </div>

      <div class="my-4">
        <h2>Musical Theatre Roots</h2>
        <p>
          Kyle Jurassic is an accomplished American actor, singer, and
          multi-instrumentalist, best known for his extensive work in musical
          theatre. He has performed at over 100 theatres across the United
          States and Canada, building a reputation for versatility and
          professionalism. His stage credits include major productions such as
          Rock of Ages, Million Dollar Quartet, Catch Me If You Can, Forever
          Plaid, Spamalot, and Buddy: The Buddy Holly Story. Jurassic's
          background also features experience in a cappella music and ballroom
          dance, further highlighting his range as a performer.
        </p>

        <h2>
          Screen Appearances
        </h2>
        <p>
          While primarily known for his stage work, Jurassic has also appeared
          in film and television. His screen credits include roles in the
          feature film Hayseed (2023) as Trooper Gellis, the TV mini-series The
          Call Boy I Met in Paris (2024) as Derek, and appearances in series
          such as Charlie & Company and The Food That Built America. He has also
          taken on roles in short films and other independent projects,
          demonstrating his adaptability across media.
        </p>

        <h2>
          Transition to Technology
        </h2>

        <p>
          The COVID-19 pandemic significantly impacted Jurassic's acting career,
          prompting a major professional shift. Drawing on his problem-solving
          skills and passion for systematic thinking, he transitioned into
          software engineering. After completing a program at Codesmith, he
          became a Cloud Engineer with IBM's Client Engineering team, where he
          has applied his creativity and technical acumen to new challenges.
          Jurassic credits his theatrical experience and the support from the
          Codesmith community for helping him succeed in this new field.
        </p>

        <h2>
          Personal Life
        </h2>

        <p>
          Kyle Jurassic grew up in New Baltimore, Michigan, attended university
          in Grand Rapids, and now resides in South Carolina with his wife and
          two daughters. His journey reflects resilience and adaptability,
          moving from a celebrated stage career to a thriving role in
          technology, while maintaining his identity as a performer and creator.
        </p>
      </div>
    </div>
  );
}
