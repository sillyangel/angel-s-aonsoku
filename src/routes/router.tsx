import BaseLayout from '@/app/layout/base'
import ErrorPage from '@/app/pages/error-page'
import RecentlyAddedAlbums from '@/app/pages/albums/recently-added'
import { createBrowserRouter } from 'react-router-dom'
import GetPlaylist from '@/app/pages/playlists/get-playlist'
import { subsonic } from '@/service/subsonic'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        id: 'recently-added',
        path: 'albums/recently-added',
        element: <RecentlyAddedAlbums />
      },
      {
        id: 'playlist',
        path: 'playlist/:playlistId',
        loader: async ({ params }) => {
          if (params.playlistId) {
            return await subsonic.playlists.getOne(params.playlistId)
          }
        },
        element: <GetPlaylist />
      }
    ]
  }
])