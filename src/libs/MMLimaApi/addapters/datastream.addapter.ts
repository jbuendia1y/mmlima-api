import { Datastream, EndpointDatastream } from "../interfaces";

/**
 * @typedef {{
 * status: any
 * description: string
 * parameters: any[]
 * tags: string[]
 * last_revision_id: any
 * timestamp?: number
 * created_at: number
 * title: string
 * modified_at: number
 * category_id: number
 * methods: any
 * sources: string[]
 * total_revisions: any
 * frequency: string
 * link: string
 * user: string
 * status_str: any
 * guid: string
 * category_name: string
 * result?: any
 * }} EndpointDatastream
 */

/**
 * @typedef {{
 * status: any
 * description: string
 * parameters: any[]
 * tags: string[]
 * last_revision_id: any
 * timestamp?: Date
 * created_at: Date
 * title: string
 * modified_at: Date
 * category_id: number
 * methods: any
 * sources: string[]
 * total_revisions: any
 * frequency: string
 * link: string
 * user: string
 * status_str: any
 * guid: string
 * category_name: string
 * result?: any
 * }} Datastream
 */

/**
 * Create Datastream Addapted
 * @param {EndpointDatastream} ed
 * @returns {Datastream} DataStream
 */
export function createDatastreamAddapted(ed: EndpointDatastream): Datastream {
  /**
   * @type {Datastream}
   */
  const formatted = {
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
