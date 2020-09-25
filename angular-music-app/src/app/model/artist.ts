export class SearchResults {
  meta:   Meta;
  search: Search;
}

export class Meta {
  totalCount:    number;
  returnedCount: number;
}

export class Search {
  query: string;
  data:  Data;
  order: string[];
}

export class Data {
  albums:    Album[];
  artists:   Artist[];
  tracks:    Track[];
  playlists: Playlist[];
}

export class Album {
  type:                string;
  id:                  string;
  upc:                 string;
  shortcut:            string;
  amg?:                string;
  href:                string;
  name:                string;
  released:            Date;
  originallyReleased:  Date;
  label:               string;
  copyright:           string;
  tags:                string[];
  discCount:           number;
  trackCount:          number;
  isExplicit:          boolean;
  isSingle:            boolean;
  accountPartner:      string;
  artistName:          string;
  isAvailableInHiRes:  boolean;
  contributingArtists: ContributingArtists;
  discographies:       Discographies;
  links:               AlbumLinks;
  isStreamable:        boolean;
}

export class ContributingArtists {
  producer?:     string;
  primaryArtist: string;
  guestVocals?:  string;
}

export class Discographies {
  others: string[];
  main:   string[];
}

export class AlbumLinks {
  images:   Images;
  tracks:   Images;
  posts:    Images;
  artists:  Artists;
  genres:   Artists;
  reviews?: Artists;
}

export class Artists {
  ids:  string[];
  href: string;
}

export class Images {
  href: string;
}

export class Artist {
  type:        string;
  id:          string;
  href:        string;
  name:        string;
  shortcut:    string;
  amg?:        string;
  blurbs:      string[];
  bios?:       Bio[];
  albumGroups: AlbumGroups;
  links:       ArtistLinks;
}

export class AlbumGroups {
  compilations?: string[];
  others?:       string[];
  singlesAndEPs: string[];
  main?:         string[];
}

export class Bio {
  title:       string;
  author:      string;
  publishDate: string;
  bio:         string;
}

export class ArtistLinks {
  albums:          Images;
  images:          Images;
  posts:           Images;
  topTracks:       Images;
  genres:          Artists;
  stations:        Artists;
  contemporaries?: Artists;
  followers?:      Artists;
  influences?:     Artists;
  relatedProjects: Artists;
}

export class Playlist {
  type:              string;
  id:                string;
  name:              string;
  modified:          Date;
  href:              string;
  trackCount:        number;
  privacy:           string;
  images:            Image[];
  description:       string;
  favoriteCount:     number;
  freePlayCompliant: boolean;
  links:             PlaylistLinks;
}

export class Image {
  type:      string;
  id:        string;
  url:       string;
  contentId: string;
  width:     number;
  height:    number;
  isDefault: boolean;
  version:   number;
  imageType: string;
}

export class PlaylistLinks {
  members:       Artists;
  tracks:        Images;
  tags:          Tags;
  sampleArtists: Artists;
}

export class Tags {
  ids: any[];
}

export class Track {
  type:               string;
  id:                 string;
  index:              number;
  disc:               number;
  href:               string;
  playbackSeconds:    number;
  isExplicit:         boolean;
  isStreamable:       boolean;
  isAvailableInHiRes: boolean;
  name:               string;
  isrc:               string;
  shortcut:           string;
  blurbs:             any[];
  artistId:           string;
  artistName:         string;
  albumName:          string;
  formats:            Format[];
  losslessFormats:    Format[];
  albumId:            string;
  contributors:       Contributors;
  links:              TrackLinks;
  previewURL:         string;
}

export class Contributors {
  featuredPerformer?: string;
  producer:           string;
  composer:           string;
  remixer?:           string;
  engineer?:          string;
  primaryArtist:      string;
}

export class Format {
  type:       Type;
  bitrate:    number;
  name:       string;
  sampleBits: number;
  sampleRate: number;
}

export enum Type {
  Format = "format",
}

export class TrackLinks {
  artists:   Artists;
  albums:    Artists;
  composers: Artists;
  genres:    Artists;
  tags:      Artists;
}