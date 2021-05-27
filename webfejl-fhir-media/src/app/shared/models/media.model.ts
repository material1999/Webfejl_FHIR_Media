export interface Media {
  id?: string;
  identifier?: string[];
  basedOn?: string[];
  partOf?: string[];
  status: string;
  type?: string;
  modality?: string;
  view?: string;
  subject?: string;
  encounter?: string;
  createdDateTime?: Date;
  createdPeriodStart?: Date;
  createdPeriodEnd?: Date;
  issued?: Date;
  operator?: string;
  reasonCode?: string[];
  bodySite?: string;
  deviceName?: string;
  device?: string;
  height?: number;
  width?: number;
  frames?: number;
  duration?: number;
  content: any;
  note?: string[];
}
