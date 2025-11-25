// dtos/GamificationDtos.ts

export interface AnimationDto {
  id: number;
  code: string;
  name: string;
  assetUrl: string;
  durationMs: number;
  metadataJson?: any;
}

export interface SoundDto {
  id: number;
  code: string;
  name: string;
  assetUrl: string;
  lengthMs: number;
  metadataJson?: any;
}

export interface ListAnimationsInput {
  keyword?: string;
}

export interface ListAnimationsOutput {
  animations: AnimationDto[];
}

export interface ListSoundsInput {
  keyword?: string;
}

export interface ListSoundsOutput {
  sounds: SoundDto[];
}

export interface BadgePresetDto {
  code: string;
  name: string;
  description?: string;
}

export interface ListBadgePresetsInput {
  keyword?: string;
}

export interface ListBadgePresetsOutput {
  presets: BadgePresetDto[];
}
