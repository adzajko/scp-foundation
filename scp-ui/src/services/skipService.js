const BASE_URL = 'http://localhost:8080';

/**
 * Retrieve all the SCP objects in the DB.
 * @returns {Promise<Array>} All the objects tracked by the Foundation.
 */
export const getAllScps = async () => {
  const rawSkips = await fetch(`${BASE_URL}/scps`);
  const allSkips = await rawSkips.json();
  return allSkips;
};

/**
 * Find an SCP by its id.
 * @param {String} id The ID of the SCP.
 * @returns {Object} The SCP matching the provided ID.
 */
export const findObjectById = async id => {
  const rawSkip = await fetch(`${BASE_URL}/scps/${id}`);
  const formattedSkip = await rawSkip.json();
  return formattedSkip;
};

/**
 * Find all the skips in the DB by provided designation.
 * @param {String} designation The designation of the SCP, full or partial.
 * @returns {Promise<Array>} An array of all the objects matching the designation.
 */
export const searchByDesignation = async designation => {
  const searchAttempt = await fetch(`${BASE_URL}/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ designation })
  });

  const foundSkips = searchAttempt.json();
  return foundSkips;
};

/**
 * Fetch all the skips by their object class.
 * @param {String} objectClass The object class to search for.
 * @returns {Promise<Array>} All the objects in the object class.
 */
export const retrieveByObjectClass = async objectClass => {
  const initReq = await fetch(`${BASE_URL}/scps/classes/${objectClass}`);
  const formattedSkips = initReq.json();
  return formattedSkips;
};
