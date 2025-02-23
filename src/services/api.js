// const token = "89364|kzlKcvPLsKlSNboKHvnD9u4q4qxs8fv5B9iTKRxNc9ceefa9";
const urlParams = new URLSearchParams(window.location.search);

// Extract the token from the query parameters
const token = urlParams.get("token");
export const fetchWeeklyData1 = async () => {
  try {
    const response = await fetch(
      "https://test.2opstarchat.com/api/pk-events/top-pk-events",
      {
        method: "post", // You can also specify POST if needed
        headers: {
          "Content-Type": "application/json", // Add any necessary content type headers
          Authorization: `Bearer ${token}`, // Use the token passed to the function
          "Custom-Header": "YourCustomHeaderValue", // Add any other custom headers if needed
        },
        body: JSON.stringify({
          type: "1", // Ensure this matches the expected request payload format
        }), // Convert the body to a JSON strin
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
export const fetchWeeklyData2 = async () => {
  try {
    const response = await fetch(
      "https://test.2opstarchat.com/api/pk-events/top-pk-events",
      {
        method: "post", // You can also specify POST if needed
        headers: {
          "Content-Type": "application/json", // Add any necessary content type headers
          Authorization: `Bearer ${token}`, // Use the token passed to the function
          "Custom-Header": "YourCustomHeaderValue", // Add any other custom headers if needed
        },
        body: JSON.stringify({
          type: "2", // Ensure this matches the expected request payload format
        }), // Convert the body to a JSON strin
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
export const fetchWeeklyData3 = async () => {
  try {
    const response = await fetch(
      "https://test.2opstarchat.com/api/pk-events/top-pk-events",
      {
        method: "post", // You can also specify POST if needed
        headers: {
          "Content-Type": "application/json", // Add any necessary content type headers
          Authorization: `Bearer ${token}`, // Use the token passed to the function
          "Custom-Header": "YourCustomHeaderValue", // Add any other custom headers if needed
        },
        body: JSON.stringify({
          type: "3", // Ensure this matches the expected request payload format
        }), // Convert the body to a JSON strin
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
export const fetchTops = async () => {
  try {
    const response = await fetch(
      "https://test.2opstarchat.com/api/pk-events/pk-event",
      {
        method: "GET", // You can also specify POST if needed
        headers: {
          "Content-Type": "application/json", // Add any necessary content type headers
          Authorization: `Bearer ${token}`, // Use the token passed to the function
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
      "https://test.2opstarchat.com/api/pk-events/top-details",
      {
        method: "GET", // You can also specify POST if needed
        headers: {
          "Content-Type": "application/json", // Add any necessary content type headers
          Authorization: `Bearer ${token}`, // Use the token passed to the function
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
