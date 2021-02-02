export interface IProject {
    _id: string;
    title: string;
    description: string;
    info: string;
    links: {
      webpage: string;
      repo: string;
    };
    images: {
      hq: string;
      mq: string;
      lq: string;
    };
    technologies: IProjectTechnology[];
    isInitial: boolean;
    index: number;
}

export interface IProjectTechnology {
  title: string;
  url: string;
}