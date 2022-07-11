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
