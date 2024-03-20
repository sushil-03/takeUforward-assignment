export type SampleInputTypes = {
  standard_input: string;
  setStandartInput: (val: string) => void;
};

export type CodeType = {
  id: string;
  username: string;
  code: string;
  language: string;
  standard_input: string;
  createdAt: Date;
};
export enum OrderEnum {
  "asc" = "asc",
  "desc" = "desc",
}
export type AddCodeType = Omit<CodeType, "id" | "createdAt">