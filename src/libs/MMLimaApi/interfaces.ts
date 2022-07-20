export interface EndpointDatastream {
  status: any;
  description: string;
  parameters: any[];
  tags: string[];
  last_revision_id: any;
  timestamp?: number;
  created_at: number;
  title: string;
  modified_at: number;
  category_id: number;
  methods: any;
  sources: string[];
  total_revisions: any;
  frequency: string;
  link: string;
  user: string;
  status_str: any;
  guid: string;
  category_name: string;
  result?: any;
}

export interface Datastream {
  status: any;
  description: string;
  parameters: any[];
  tags: string[];
  last_revision_id: any;
  timestamp?: Date;
  created_at: Date;
  title: string;
  modified_at: Date;
  category_id: number;
  methods: any;
  sources: string[];
  total_revisions: any;
  frequency: string;
  link: string;
  user: string;
  status_str: any;
  guid: string;
  category_name: string;
  result?: any;
}

export interface EndpointVisualization {}

export interface Visualization {}

export interface EndpointMain {
  resources: "http://api.datosabiertos.munlima.gob.pe/api/v2/resources/";
  datastreams: "http://api.datosabiertos.munlima.gob.pe/api/v2/datastreams/";
  datasets: "http://api.datosabiertos.munlima.gob.pe/api/v2/datasets/";
  visualizations: "http://api.datosabiertos.munlima.gob.pe/api/v2/visualizations/";
  dashboards: "http://api.datosabiertos.munlima.gob.pe/api/v2/dashboards/";
  sources: "http://api.datosabiertos.munlima.gob.pe/api/v2/sources/";
  tags: "http://api.datosabiertos.munlima.gob.pe/api/v2/tags/";
  categories: "http://api.datosabiertos.munlima.gob.pe/api/v2/categories/";
  stats: "http://api.datosabiertos.munlima.gob.pe/api/v2/stats/";
  "account/resources": "http://api.datosabiertos.munlima.gob.pe/api/v2/account/resources/";
  "account/children": "http://api.datosabiertos.munlima.gob.pe/api/v2/account/children/";
}

export interface Main {
  resources: string;
  datastreams: string;
  datasets: string;
  visualizations: string;
  dashboards: string;
  sources: string;
  tags: string;
  categories: string;
  stats: string;
  accountResources: string;
  accountChildren: string;
}
