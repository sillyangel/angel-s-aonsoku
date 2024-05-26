import { IArtistAlbum } from "./album"
import { SubsonicResponse } from "./subsonicResponse"

export interface IArtist {
  id: string
  name: string
  coverArt: string
  albumCount: number
  starred?: string
  artistImageUrl: string
  album: IArtistAlbum[]
}

export interface ArtistResponse extends SubsonicResponse<{ artist: IArtist }> {}
