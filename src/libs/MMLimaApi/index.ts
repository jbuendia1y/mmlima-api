import axios from "axios";
import { createDatastreamAddapted } from "./addapters/datastream.addapter";
import { Datastream, EndpointDatastream } from "./interfaces";

/**
 * # MMLimaApi
 * Municipalidad metropolitana de Lima API no oficial.
 * @example
 * const api = new MMLimaApi("MY_AUTH_KEY")
 * await api.datastreams()
 */
export class MMLimaApi {
  private baseUrl = "http://api.datosabiertos.munlima.gob.pe/api/v2";

  public authKey: string;

  /**
   *
   * @param {string} authKey
   */
  constructor(authKey: string) {
    this.authKey = authKey;
  }

  /**
   * Datastreams method
   * @returns {Promise<import("../addapters/datastream.addapter").Datastream[]>} Datastreams
   */
  async datastreams(): Promise<Datastream[]> {
    const url =
      this.baseUrl + `/datastreams/?format=json&auth_key=${this.authKey}`;
    const res = await axios.get<EndpointDatastream[]>(url).then((v) => ({
      ...v,
      data: v.data.map(createDatastreamAddapted),
    }));

    return res.data;
  }

  /**
   * Datastream method
   * @param {string} guid
   * @param {{ limit: number }} options
   * @returns {Promise<import("../addapters/datastream.addapter").Datastream>} Datastream
   */
  async datastream(
    guid: string,
    options = {
      limit: 50,
    }
  ): Promise<Datastream> {
    const url = `${this.baseUrl}/datastreams/${guid}/data.json/?auth_key=${this.authKey}&limit=${options.limit}`;
    const res = await axios.get<EndpointDatastream>(url).then((v) => ({
      ...v,
      data: createDatastreamAddapted(v.data),
    }));

    return res.data;
  }
}
