export type Post = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  featured_image_src?: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  author_info?: {
    display_name: string;
    author_link: string;
  };
  featured_media: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  sticky: boolean;
  template: string;
  format:
    | "standard"
    | "aside"
    | "chat"
    | "gallery"
    | "link"
    | "image"
    | "quote"
    | "status"
    | "video"
    | "audio";
  meta: any[];
  categories: number[];
  tags: number[];
};

export interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  acf: any[];
  _links: {
    self: Array<{href: string}>;
    collection: Array<{href: string}>;
    about: Array<{href: string}>;
    "wp:post_type": Array<{href: string}>;
  };
}

export type Tag = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: "post_tag";
  meta: any[];
};

export type Page = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  template: string;
  meta: any[];
};

export type Author = {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
  meta: any[];
};

export type BlockType = {
  api_version: number;
  title: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  keywords: string[];
  parent: string[];
  supports: {
    [key: string]: any;
  };
  styles: {
    name: string;
    label: string;
    isDefault: boolean;
  }[];
  textdomain: string;
  example: {
    [key: string]: any;
  };
  attributes: {
    [key: string]: any;
  };
  provides_context: {
    [key: string]: string;
  };
  uses_context: string[];
  editor_script: string;
  script: string;
  editor_style: string;
  style: string;
};

export type EditorBlock = {
  id: string;
  name: string;
  attributes: {
    [key: string]: any;
  };
  innerBlocks: EditorBlock[];
  innerHTML: string;
  innerContent: string[];
};

export type TemplatePart = {
  id: string;
  slug: string;
  theme: string;
  type: string;
  source: string;
  origin: string;
  content: string | EditorBlock[];
  title: {
    raw: string;
    rendered: string;
  };
  description: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  wp_id: number;
  has_theme_file: boolean;
  author: number;
  area: string;
};

export type SearchResult = {
  id: number;
  title: string;
  url: string;
  type: string;
  subtype: string;
  _links: {
    self: {
      embeddable: boolean;
      href: string;
    }[];
    about: {
      href: string;
    }[];
  };
};

export type FeaturedMedia = {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    sizes: {
      [key: string]: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
  };
  source_url: string;
};

type FilterBarProps = {
  authors: Author[];
  tags: Tag[];
  categories: Category[];
  selectedAuthor?: string;
  selectedTag?: string;
  selectedCategory?: string;
};


// types/wordpress.ts

export interface Course {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  template: string;
  meta: {
    _acf_changed: boolean;
    _EventAllDay: boolean;
    _EventTimezone: string;
    _EventStartDate: string;
    _EventEndDate: string;
    _EventStartDateUTC: string;
    _EventEndDateUTC: string;
    _EventShowMap: boolean;
    _EventShowMapLink: boolean;
    _EventURL: string;
    _EventCost: string;
    _EventCostDescription: string;
    _EventCurrencySymbol: string;
    _EventCurrencyCode: string;
    _EventCurrencyPosition: string;
    _EventDateTimeSeparator: string;
    _EventTimeRangeSeparator: string;
    _EventOrganizerID: number[];
    _EventVenueID: number[];
    _OrganizerEmail: string;
    _OrganizerPhone: string;
    _OrganizerWebsite: string;
    _VenueAddress: string;
    _VenueCity: string;
    _VenueCountry: string;
    _VenueProvince: string;
    _VenueState: string;
    _VenueZip: string;
    _VenuePhone: string;
    _VenueURL: string;
    _VenueStateProvince: string;
    _VenueLat: string;
    _VenueLng: string;
    _VenueShowMap: boolean;
    _VenueShowMapLink: boolean;
    _themeisle_gutenberg_block_has_review: boolean;
    _course_prerequisite: number;
    _course_featured: string;
    _sensei_self_enrollment_not_allowed: boolean;
    disable_notification: boolean;
    _open_access: boolean;
    sensei_course_publish_lessons: boolean;
    _course_theme: string;
    sensei_course_video_autocomplete: boolean;
    sensei_course_video_autopause: boolean;
    sensei_course_video_required: boolean;
    _course_expiration_type: string;
    _course_expiration_length: number;
    _course_expiration_period: string;
    _course_expires_on_date: string;
    _course_start_type: string;
    _course_starts_on_date: string;
    sensei_course_audience?: string;
    sensei_course_skill_level?: string;
    footnotes: string;
    _course_woocommerce_product?: number[];
    [key: string]: any;
  };
  projects: number[];
  personal: number[];
  industry: number[];
  'course-category': number[];
  class_list: string[];
  acf: any[];
  yoast_head: string;
  yoast_head_json?: {
    title: string;
    description: string;
    robots: {
      index: string;
      follow: string;
      'max-snippet': string;
      'max-image-preview': string;
      'max-video-preview': string;
    };
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    article_publisher: string;
    article_modified_time: string;
    og_image: Array<{
      url: string;
      width: number;
      height: number;
      type: string;
    }>;
    twitter_card: string;
    twitter_site: string;
    twitter_misc: {
      [key: string]: string;
    };
    schema: {
      '@context': string;
      '@graph': any[];
    };
  };
  course_membership_products: any[];
  is_coteacher: boolean;
  _links: {
    self: Array<{
      href: string;
    }>;
    collection: Array<{
      href: string;
    }>;
    about: Array<{
      href: string;
    }>;
    author: Array<{
      embeddable: boolean;
      href: string;
    }>;
    'wp:featuredmedia': Array<{
      embeddable: boolean;
      href: string;
    }>;
    'wp:attachment': Array<{
      href: string;
    }>;
    'wp:term': Array<{
      taxonomy: string;
      embeddable: boolean;
      href: string;
    }>;
    curies: Array<{
      name: string;
      href: string;
      templated: boolean;
    }>;
    [key: string]: any;
  };
}
