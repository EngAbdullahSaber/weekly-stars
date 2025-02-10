export const fetchWeeklyData = async () => {
  try {
    const response = await fetch(
      "https://test.2opstarchat.com/api/events/role-event",
      {
        method: "GET", // You can also specify POST if needed
        headers: {
          "Content-Type": "application/json", // Add any necessary content type headers
          Authorization: `Bearer 89355|2wES5gdcpVgi18BbhjX4BkgRNlBhDA6OgZzuLii45c2d137d`, // Use the token passed to the function
          "Custom-Header": "YourCustomHeaderValue", // Add any other custom headers if needed
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    throw new Error(error.message); // Handle errors if the request fails
  }
};
export const fetchWeeklyData1 = async () => {
  try {
    const response = await fetch(
      "https://test.2opstarchat.com/api/events/top-weekly-events",
      {
        method: "GET", // You can also specify POST if needed
        headers: {
          "Content-Type": "application/json", // Add any necessary content type headers
          Authorization: `Bearer 89355|2wES5gdcpVgi18BbhjX4BkgRNlBhDA6OgZzuLii45c2d137d`, // Use the token passed to the function
          "Custom-Header": "YourCustomHeaderValue", // Add any other custom headers if needed
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    throw new Error(error.message); // Handle errors if the request fails
  }
};
export const fetchBonusData = async () => {
  try {
    const response = await fetch(
      "https://test.2opstarchat.com/api/events/top-details",
      {
        method: "GET", // You can also specify POST if needed
        headers: {
          "Content-Type": "application/json", // Add any necessary content type headers
          Authorization: `Bearer 89355|2wES5gdcpVgi18BbhjX4BkgRNlBhDA6OgZzuLii45c2d137d`, // Use the token passed to the function
          "Custom-Header": "YourCustomHeaderValue", // Add any other custom headers if needed
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    throw new Error(error.message); // Handle errors if the request fails
  }
};
