// We dont need all the data so we are just going to take the base props that we need
export interface Images {
  original: {
    webp: string;
    height: string;
    width: string;
  };
}
export interface GIF {
  id: string;
  url: string;
  title: string;
  bitly_url: string;
  source_post_url: string;
  images: Images;
}

export interface Pagination {
  total_count?: number;
  offset?: number;
  count?: number;
}

export interface Meta {
  msg: string;
  status: number;
}

export interface GetGifs {
  data: GIF[];
  pagination: Pagination;
  meta?: Meta;
  error?: string;
}
