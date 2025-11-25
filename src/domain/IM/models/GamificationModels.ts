// IM/models/GamificationModels.ts

export interface ImAnimation {
  id: number;
  code: string;
  name: string;
  assetUrl: string;
  durationMs: number;
  metadataJson?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImSound {
  id: number;
  code: string;
  name: string;
  assetUrl: string;
  lengthMs: number;
  metadataJson?: any;
  createdAt: Date;
  updatedAt: Date;
}
