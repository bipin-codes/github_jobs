export default interface IJob {
  company: { display_name: string };
  title: string;
  logo: string;
  contract_type: string;
  location: { display_name: string };
  created: Date;
  description?: string;
}
