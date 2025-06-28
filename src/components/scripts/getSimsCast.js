import { getCollection } from "astro:content";

export async function getSimsCast() {
  const sims = await getCollection("simsCast");

  return sims.flatMap(sim =>
    sim.data.generation.flatMap(gen =>
      gen.cast.map(member => ({
        name: member.name,
        slug: member.name.toLowerCase().replace(" ", "-"),
      }))
    )
  );
}