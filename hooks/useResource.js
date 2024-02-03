// Do CRUD stuff!

import useSWR from 'swr';

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
import { useContextAuth } from '@/contexts/auth';

// defines a hook called useResource
export default function useResource() {
  const { tokens, logout  } = useContextAuth();

  const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

  // TODO: Attempt to use axios instead
  async function fetchResource(url) {
    if (!tokens) {
      return;
    }

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
      let options = config();
      options.method = 'POST'; 
      options.body = JSON.stringify(info);
      console.log("createResource", options);
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
        Authorization: 'Bearer ' + tokens.access,
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