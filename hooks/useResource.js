// Do CRUD stuff!

import useSWR from 'swr';

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
import { useContextAuth } from '@/contexts/auth';

// defines a hook called useResource
export default function useResource() {
  const { tokens, logout  } = useContextAuth();

  const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

  async function fetchResource(url) {
    // if (!tokens) {
    //   return;
    // }

    try {
      const response = await fetch(apiUrl, config());
      const responseJSON = await response.json();
      return responseJSON;

    } catch (err) {
      handleError(err);
    }
  }

  async function createResource(info) {
    try {
      const options = config();
      (options.method = 'POST'), (options.body = JSON.stringify(info));
      await fetch(apiUrl, options);
      mutate(); // mutate causes complete collection to be refetched
    } catch (err) {
      handleError(err);
    }
  }

  async function deleteResource(id) {
    try {
      const url = apiUrl + id;
      const options = config();
      options.method = 'DELETE';
      await fetch(url, options);
      mutate(); // mutate causes complete collection to be refetched
    } catch (err) {
      handleError(err);
    }
  }

  async function updateResource(resource) {
    // STRETCH
    // Add ability for user to update an existing resource
  }

  // helper function to handle getting Authorization headers EXACTLY right
  function config() {
    return {
      headers: {
        // Authorization: 'Bearer ' + tokens.access,
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2NjU3MTEwLCJpYXQiOjE3MDY1NzA3MTAsImp0aSI6ImZlNzIxMTUzZGQ4ODRiN2ZhZjNkZTUyZTllMTRiNTA5IiwidXNlcl9pZCI6MSwiZW1haWwiOiIiLCJ1c2VybmFtZSI6ImFkbWluIn0.lCcPRqbK5swm3Heydjh1_Fw17my-os8ok1Jl3mDlJZY',
        'Content-Type': 'application/json',
      },
    };
  }

  function handleError(err) {
    console.error(err);
    // currently just log out on error
    // but a common error will be short lived token expiring
    // STRETCH: refresh the access token when it has expired
    logout();
  }
  // console.log("useResource",data)
  return {
    resources: data,
    error,
    loading: tokens && !error && !data,
    createResource,
    deleteResource,
    updateResource,
  };
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/