export type ControlTypes = {
  play: boolean;
  setisPlaying: any;
  goToNextSong: any;
  goToPrevSong: any;
  arrayLength: number;
  index: number;
};

export type musicArrayType = {
  title: string;
  subtitle: string;
  audio: string;
  image: string;
};

export type PlayerTypes = {
  theme: string;
  isPlaying: boolean;
  setisPlaying: any;
  audio: musicArrayType[];
};

export type TrackTypes = {
  isPlaying: boolean;
  image: string;
  title: string;
  subtitle: string;
};
export type SeekerTypes = {
  appTime: number;
  duration: number;
  setseeker: any;
};

export type VolumeBarTypes = {
  volume: number | string;
  setvolume: any;
};
