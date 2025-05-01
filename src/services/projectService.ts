export const getProjects = async () => {
  // Actual implementation example:
  try {
    const response = await fetch('/api/projects');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};
