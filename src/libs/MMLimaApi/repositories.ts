import axios from "axios";

export interface RepositoryConfig {
  format?: "json";
  auth_key: string;
}

/**
 * Addapter Type
 * @param ed is Endpoint
 * @returns Object Formatted
 */
type AddapterType<T, I> = (ed: I) => T;

/**
 * Repository model
 * @description Repository model have methods for fetch data
 * @example
 * const addapter = (ed: IEndpointDataStream) => {
 *  // Return formatted ed
 *  return {} as Datastream
 * }
 * const repository = new Repository<Datastream, IEndpointDatastream>("datastream", addapter)
 * await repository.findAll()
 * @returns Returns Repository model
 */
export class Repository<T, I> {
  private baseUrl = "http://api.datosabiertos.munlima.gob.pe/api/v2";
  private path = "";
  private addapter: AddapterType<T, I>;

  private config: RepositoryConfig;

  constructor(
    path: string,
    addapter: AddapterType<T, I>,
    config: RepositoryConfig
  ) {
    this.path = path;
    this.addapter = addapter;
    this.config = {
      format: "json",
      ...config,
    };
  }

  async findOne(guid: string, config?: RepositoryConfig): Promise<T> {
    const { format, ...params } = this.config;
    const res = await axios
      .get<I>(this.baseUrl + "/" + this.path + "/" + guid + "." + format, {
        params: { ...params, ...config },
      })
      .then((res) => ({ ...res, data: this.addapter(res.data) }));
    return res.data;
  }

  async findAll(config?: RepositoryConfig): Promise<T[]> {
    const { format, ...params } = this.config;
    const res = await axios
      .get<I[]>(this.baseUrl + "/" + this.path + "." + format, {
        params: { ...params, ...config },
      })
      .then((res) => ({
        ...res,
        data: res.data.map((item) => this.addapter(item)),
      }));

    return res.data;
  }
}
