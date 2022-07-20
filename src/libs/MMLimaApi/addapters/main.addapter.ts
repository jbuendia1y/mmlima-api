import { EndpointMain, Main } from "../interfaces";

export function createMainAddapted(ed: EndpointMain) {
  const formatted: Main = {
    accountChildren: ed["account/children"],
    accountResources: ed["account/resources"],
    categories: ed.categories,
    dashboards: ed.dashboards,
    datasets: ed.datasets,
    datastreams: ed.datastreams,
    resources: ed.resources,
    sources: ed.sources,
    stats: ed.stats,
    tags: ed.tags,
    visualizations: ed.visualizations,
  };

  return formatted;
}
