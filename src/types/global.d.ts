interface NYTArticle {
  uri: string;
  url: string;
  title: string;
  abstract: string;
  section: string;
  multimedia: { url: string; format: string }[];
}

interface NYTMultimedia {
  default?: {
    url: string;
  };
}

interface NYTSearchArticle {
  _id: string;
  web_url: string;
  headline: { main: string };
  abstract: string;
  section_name: string;
  multimedia: NYTMultimedia;
}
