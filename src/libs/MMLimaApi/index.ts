import {
  createMainAddapted,
  createVisualizationAddapted,
  createDatastreamAddapted,
} from "./addapters";
import {
  Datastream,
  EndpointDatastream,
  EndpointMain,
  EndpointVisualization,
  Visualization,
} from "./interfaces";
import { Repository, RepositoryConfig } from "./repositories";
import axios from "axios";

/**
 * # MMLimaApi
 * Municipalidad metropolitana de Lima API no oficial.
 * @example
 * const api = new MMLimaApi({
 *  auth_key: "MY_AUTH_KEY"
 * })
 * await api.datastreams.findAll()
 */
export class MMLimaApi {
  private baseUrl = "http://api.datosabiertos.munlima.gob.pe/api/v2";
  private config: RepositoryConfig;

  readonly datastreams: Repository<Datastream, EndpointDatastream>;
  readonly visualizations: Repository<Visualization, EndpointVisualization>;

  constructor(config: RepositoryConfig) {
    this.config = config;

    this.datastreams = new Repository(
      "datastreams",
      createDatastreamAddapted,
      this.config
    );

    this.visualizations = new Repository(
      "visualizations",
      createVisualizationAddapted,
      this.config
    );
  }

  async findAll() {
    const res = await axios
      .get<EndpointMain>(this.baseUrl, {
        params: this.config,
      })
      .then((res) => ({ ...res, data: createMainAddapted(res.data) }));

    return res.data;
  }
}
