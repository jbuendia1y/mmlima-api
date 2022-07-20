import { Datastream, EndpointDatastream } from "../interfaces";

/**
 * Create Datastream Addapted
 */
export function createDatastreamAddapted(ed: EndpointDatastream): Datastream {
  const formatted: Datastream = {
    category_id: ed.category_id,
    category_name: ed.category_name,
    timestamp: ed.timestamp ? new Date(ed.timestamp) : undefined,
    created_at: new Date(ed.created_at),
    modified_at: new Date(ed.modified_at),
    description: ed.description,
    frequency: ed.frequency,
    guid: ed.guid,
    last_revision_id: ed.last_revision_id,
    link: ed.link,
    methods: ed.methods,
    parameters: ed.parameters,
    sources: ed.sources,
    status: ed.status,
    status_str: ed.status_str,
    tags: ed.tags,
    title: ed.title,
    total_revisions: ed.total_revisions,
    user: ed.user,
    result: ed.result,
  };

  return formatted;
}
