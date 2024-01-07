export interface ProjcetData {
  key: string;
  name: string;
  title: string;
  project: ProjcetDetailData[];
}
export interface ProjcetDetailData {
  key: string;
  name: string;
  url?: string;
  img: string;
  description: string;
}